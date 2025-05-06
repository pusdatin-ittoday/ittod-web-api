const prisma = require("../prisma.js")
const crypto = require("crypto")

const submitTeamFile = async ({ user_id, team_id, title, url_file }) => {
    const existingFile = await prisma.competition_submission.findFirst({
        where: { team_id },
    });
    if (existingFile) {
        throw {
            status: 409,
            message: "Team already submitted file!",
        };
    }
    const file_id = crypto.randomUUID();
    const result = await prisma.team.findUnique({
        where: { id: team_id },
        select: { competition_id: true },
      });
      
      const competition_id = String(result?.competition_id);
    try {
        await prisma.$transaction(async tx => {
            await tx.media.create({
                data: {
                    id: file_id,
                    uploader_id: user_id,
                    name: title,
                    type: "pdf",
                    url: url_file,
                    grouping: "competition_submission"
                },
            });

            await tx.competition_submission.create({
                data: {
                    team_id: team_id,
                    competition_id: competition_id,
                    media_id: file_id,
                },
            });
        });

        return { message: "Submitted Successfuly" };
    } catch (error) {
        console.error("Submission error:", error);
        throw { status: 500, message: "Submission Failed" };
    }
};

module.exports = { submitTeamFile };