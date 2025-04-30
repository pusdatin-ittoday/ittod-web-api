import prisma from "../prisma.mjs";
import crypto from "crypto";

export const registerTeamThenInsertLeader = async ({ competition_id, team_name, leader_id }) => {
    const random_id = crypto.randomUUID();
    const team_code = crypto.randomBytes(6).toString("base64url");

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
        // Create the team
        await prisma.team.create({
            data: {
                id: random_id,
                competition_id,
                team_name,
                team_code,
            },
        });

        // Add the leader to the team
        await prisma.team_member.create({
            data: {
                user_id: leader_id,
                team_id: random_id,
                role: "leader",
            },
        });

        return { message: "Team successfully registered and leader assigned" };
    } catch (error) {
        console.error("Registration error:", error);
        throw { status: 500, message: "Failed to register team" };
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
