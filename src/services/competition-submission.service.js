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

            const submissionTimeline = await tx.event_timeline.findFirst({
                where: {
                    event_id: team.competition_id,
                    is_submission: true,
                },
            });

            if (!submissionTimeline) {
                throw {
                    status: 403,
                    message: "Batas waktu pengumpulan belum diatur oleh panitia, sehingga submisi saat ini ditutup.",
                };
            }

            // Prisma interprets MySQL DATETIME as UTC. 
            // We strip the trailing Z to parse it as local time, just like the frontend.
            const parseLocalDate = (dateStr) => {
                if (!dateStr) return null;
                const str = typeof dateStr === 'string' ? dateStr : dateStr.toISOString();
                return new Date(str.endsWith('Z') ? str.slice(0, -1) : str);
            };

            const now = new Date();
            const start = parseLocalDate(submissionTimeline.date);
            const end = parseLocalDate(submissionTimeline.end_date);

            if (now < start || (end && now > end)) {
                throw {
                    status: 403,
                    message: "Batas waktu pengumpulan atau revisi submisi telah ditutup atau belum dimulai.",
                };
            }

            const finalPayload = typeof submission_object === 'string' 
                ? submission_object 
                : JSON.stringify(submission_object);

            await tx.competition_submission.upsert({
                where: {
                    team_id_competition_id: {
                        team_id,
                        competition_id: team.competition_id,
                    },
                },
                update: { submission_object: finalPayload },
                create: {
                    team_id,
                    competition_id: team.competition_id,
                    submission_object: finalPayload,
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
