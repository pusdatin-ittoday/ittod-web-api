const prisma = require("../prisma.js");

const upsertTeamSubmission = async (team_id,submission_object) => {
    try {
        await prisma.$transaction(async tx => {
            const team = await tx.team.findUnique({
                where: { id: team_id },
                select: { competition_id: true },
            });

            await tx.competition_submission.upsert({
                where: { team_id_competition_id: { team_id, competition_id: team.competition_id } },
                update: { submission_object },
                create: {
                    team_id,
                    competition_id: team.competition_id,
                    submission_object,
                },
            });
        });

        return { message: "Submitted Successfuly" };
    } catch (error) {
        console.error("Submission error:", error);
        throw { status: 500, message: "Submission Failed" };
    }
};


module.exports = { upsertTeamSubmission };
