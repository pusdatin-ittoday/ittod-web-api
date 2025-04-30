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
    if (!prisma.user.findUnique({ where: { id: leader_id } }))
        throw { status: 404, message: "id of leader is not found" };

    if (!prisma.team.findUnique({ where: { id: team_id } }))
        throw { status: 404, message: "id of team is not found" };

    try {
        const leader = await prisma.team_member.upsert({
            where: {team_id},
            data: {
                team_id,
                user_id: leader_id,
                role: "leader",
            }
        })
    } catch (err) {
        console.error("Leader Join error:", err);
        throw {
            status: 500,
            message:
                "Failed to insert leader into the db, please contact admin",
        };
    }
};
