import prisma from "../prisma.mjs";
import crypto from "crypto";
import { checkUserCompetitionLimit } from "../helpers/checkUserCompetitionLimit.mjs";

export const registerTeamThenInsertLeader = async ({
    competition_id,
    team_name,
    leader_id,
}) => {
    const existingLeader = await prisma.team_member.findFirst({
        where: {
            user_id: leader_id,
            role: "leader",
        },
    });

    if (existingLeader) {
        throw {
            status: 403,
            message: "You can only register one team as a leader",
        };
    }
    await checkUserCompetitionLimit(prisma, leader_id);
    const random_id = crypto.randomUUID();
    const MAX_RETRIES = 10;
    let retryCount = 0;
    let team_code;
    let existingTeamWithCode;
    // Ensure team code is unique
    do {
        team_code = crypto.randomBytes(6).toString("base64url");
        existingTeamWithCode = await prisma.team.findUnique({
            where: { team_code },
        });
        retryCount++;
        if (retryCount >= MAX_RETRIES && existingTeamWithCode) {
            throw {
                status: 500,
                message: "Failed to generate unique team code",
            };
        }
    } while (existingTeamWithCode);

    const competitionExists = await prisma.event.findFirst({
        where: { id: competition_id , type: "competition"},
    });
    if (!competitionExists)
        throw { status: 404, message: "competition_id not found" };

    const teamExists = await prisma.team.findFirst({ where: { team_name } });
    if (teamExists) throw { status: 409, message: "Team name already exists" };

    const leaderExists = await prisma.user.findUnique({
        where: { id: leader_id },
    });
    if (!leaderExists) throw { status: 404, message: "Leader ID not found" };

    try {
        await prisma.$transaction(async tx => {
            // Create the team
            await tx.team.create({
                data: {
                    id: random_id,
                    competition_id,
                    team_name,
                    team_code,
                },
            });
            // Add the leader to the team
            await tx.team_member.create({
                data: {
                    user_id: leader_id,
                    team_id: random_id,
                    role: "leader",
                },
            });
        });

        return { message: "Team successfully registered and leader assigned" };
    } catch (error) {
        console.error("Registration error:", error);
        throw { status: 500, message: "Failed to register team" };
    }
};

export const memberJoinWithTeamCode = async ({ user_id, team_code }) => {
    return prisma.$transaction(
        async tx => {
            await checkUserCompetitionLimit(tx, user_id);

            const team = await tx.team.findUnique({ where: { team_code } });
            if (!team) throw { status: 404, message: "Invalid team code" };

            const existingMember = await tx.team_member.findUnique({
                where: { user_id_team_id: { user_id, team_id: team.id } },
            });
            if (existingMember)
                throw {
                    status: 409,
                    message: "User is already a member of this team",
                };

            const teamMemberCount = await tx.team_member.count({
                where: { team_id: team.id },
            });
            // Verify team's competition exists
            const competitionExists = await tx.event.findFirst({
                where: { id: team.competition_id, type: "competition" },
            });
            if (!competitionExists) {
                throw {
                    status: 404,
                    message: "Competition not found for this team",
                };
            }

            if (teamMemberCount >= team.max_member)
                throw {
                    status: 403,
                    message: "Team has reached the maximum member limit",
                };

            await tx.team_member.create({
                data: {
                    user_id,
                    team_id: team.id,
                    role: "member",
                },
            });

            return { message: "Successfully joined the team" };
        },
        { isolationLevel: "Serializable" }
    ); // Important!
};
