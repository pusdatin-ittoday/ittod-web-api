const prisma = require("../prisma.js");
const crypto = require("crypto");

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
                    grouping: "competition_submission",
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

const updateTeamFile = async ({ user_id, team_id, title, url_file }) => {
    const oldFile = await prisma.competition_submission.findFirst({
        where: { team_id },
    });
    if (!oldFile) {
        throw {
            status: 404,
            message: "There's no submission to update.",
        };
    }

    const media_id = String(oldFile?.media_id);
    try {
        await prisma.$transaction(async tx => {
            await tx.media.update({
                where: {
                    id: media_id,
                },
                data: {
                    uploader_id: user_id,
                    name: title,
                    type: "pdf",
                    url: url_file,
                    grouping: "competition_submission",
                    updated_at: new Date(),
                },
            });
            await tx.competition_submission.update({
                where: {
                    media_id,
                },
                data: {
                    updated_at: new Date(),
                },
            });
        });
        return { message: "File Updated Successfuly" };
    } catch (error) {
        console.error("Update error:", error);
        throw { status: 500, message: "Update Failed" };
    }
};

module.exports = { updateTeamFile, submitTeamFile };
