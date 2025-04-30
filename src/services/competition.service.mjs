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
