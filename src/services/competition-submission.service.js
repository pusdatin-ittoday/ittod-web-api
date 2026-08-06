const prisma = require("../prisma.js");

const upsertTeamSubmission = async (team_id, submission_object) => {
    try {
        await prisma.$transaction(async tx => {
            const team = await tx.team.findUnique({
                where: { id: team_id },
                select: {
                    competition_id: true,
                    is_verified: true,
                    is_document_verified: true,
                },
            });

            if (!team) {
                throw {
                    status: 404,
                    message: "Team not found",
                };
            }

            const isPaymentVerified = team.is_verified === true || team.is_verified === 1 || team.is_verified === "approved";
            const isDocumentVerified = team.is_document_verified === true || team.is_document_verified === 1 || team.is_document_verified === "approved";

            if (!isPaymentVerified || !isDocumentVerified) {
                throw {
                    status: 403,
                    message: "Tim belum sepenuhnya terverifikasi. Pastikan berkas dan pembayaran sudah disetujui.",
                };
            }

            await tx.competition_submission.upsert({
                where: {
                    team_id_competition_id: {
                        team_id,
                        competition_id: team.competition_id,
                    },
                },
                update: { submission_object },
                create: {
                    team_id,
                    competition_id: team.competition_id,
                    submission_object,
                },
            });
        });

        return { message: "Submitted Successfully" };
    } catch (error) {
        console.error("Submission error:", error);
        if (error.status) {
            throw error;
        }
        throw { status: 500, message: "Submission Failed" };
    }
};

module.exports = { upsertTeamSubmission };
