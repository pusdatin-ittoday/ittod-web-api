import prisma from "../prisma.mjs";
import crypto from "crypto";

export const registerTeam = async ({ competition_id, team_name }) => {
    const random_id = crypto.randomBytes(32).toString("hex");
    const team_code = crypto.randomBytes(6).toString("base64url");
    if (!prisma.competition.findUnique({ where: { id: competition_id } }))
        throw { status: 404, message: "competition_id not found" };

    if (prisma.team.findFirst({ where: { team_name } }))
        throw { status: 406, message: "Team name already existed" };

    try {
        const team = await prisma.$transaction(async prismaClient => {
            return prismaClient.team.create({
                data: {
                    id: random_id,
                    competition_id,
                    team_name,
                    team_code,
                },
            });
        });
    } catch (err) {
        console.error("Registration error:", error);
        throw { status: 500, message: "Failed to register team" };
    }
};

export const leaderJoin = async ({ leader_id, team_id }) => {
    const leaderExists = await prisma.user.findUnique({ where: { id: leader_id } });
    if (!leaderExists) throw { status: 404, message: "Leader ID not found" };

    const teamExists = await prisma.team.findUnique({ where: { id: team_id } });
    if (!teamExists) throw { status: 404, message: "Team ID not found" };

    try {
        await prisma.team_member.upsert({
            where: { user_id_team_id: { user_id: leader_id, team_id } },
            update: { role: "leader" },
            create: {
                team_id,
                user_id: leader_id,
                role: "leader",
            },
        });
        return { message: "Leader successfully joined the team" };
    } catch (err) {
        console.error("Leader Join error:", err);
        throw { status: 500, message: "Failed to join leader, please contact admin" };
    }
};

export const memberJoinWithTeamCode = async ({ user_id, team_code }) => {
    // Validate if the team exists with the given team_code
    const team = await prisma.team.findUnique({ where: { team_code } });
    if (!team) throw { status: 404, message: "Invalid team code" };

    // Check if the user is already a member of the team
    const existingMember = await prisma.team_member.findUnique({
        where: { user_id_team_id: { user_id, team_id: team.id } },
    });
    if (existingMember)
        throw { status: 409, message: "User is already a member of this team" };

    try {
        // Add the user as a member of the team
        await prisma.team_member.create({
            data: {
                user_id,
                team_id: team.id,
                role: "member", // Default role for new members
            },
        });
        return { message: "Successfully joined the team" };
    } catch (err) {
        console.error("Member Join error:", err);
        throw {
            status: 500,
            message: "Failed to join the team, please contact admin",
        };
    }
};
