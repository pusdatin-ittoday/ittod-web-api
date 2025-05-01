import prisma from "../prisma.mjs";
import crypto from "crypto";

export const registerTeamThenInsertLeader = async ({
    competition_id,
    team_name,
    leader_id,
}) => {
    // Check if the user is already registered in more than 2 competitions
    const userCompetitionsCount = await prisma.team_member.count({
        where: {
            user_id: leader_id,
        },
        distinct: ["team.competition_id"],
    });

    if (userCompetitionsCount >= 2) {
        throw {
            status: 403,
            message: "You can only participate in at most 2 competitions",
        };
    }

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

    const competitionExists = await prisma.competition.findUnique({
        where: { id: competition_id },
    });
    if (!competitionExists)
        throw { status: 404, message: "competition_id not found" };

    const teamExists = await prisma.team.findFirst({ where: { team_name } });
    if (teamExists) throw { status: 406, message: "Team name already exists" };

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
            // Check if the user is already registered in more than 2 competitions
            const userCompetitionsCount = await tx.team_member.count({
                where: {
                    user_id,
                },
                distinct: ["team.competition_id"],
            });

            if (userCompetitionsCount >= 2) {
                throw {
                    status: 403,
                    message:
                        "You can only participate in at most 2 competitions",
                };
            }

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
            const competition = await tx.competition.findUnique({
                where: { id: team.competition_id },
            });

            if (teamMemberCount >= competition.max_team_member)
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
