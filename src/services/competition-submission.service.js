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

            // Prisma interprets MySQL DATETIME as UTC, but it is stored as Asia/Jakarta time (WIB, UTC+7).
            // Explicitly parse with +07:00 offset to avoid timezone drift on UTC servers.
            const parseLocalDate = (dateStr) => {
                if (!dateStr) return null;
                const str = typeof dateStr === 'string' ? dateStr : dateStr.toISOString();
                let cleaned = str.replace(' ', 'T');
                if (cleaned.endsWith('Z')) {
                    cleaned = cleaned.slice(0, -1);
                }
                if (!cleaned.includes('+') && !cleaned.match(/-\d{2}:\d{2}$/)) {
                    cleaned += '+07:00';
                }
                return new Date(cleaned);
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

            let finalPayload = submission_object;
            if (typeof submission_object === 'string') {
                try {
                    finalPayload = JSON.parse(submission_object);
                } catch {
                    finalPayload = submission_object;
                }
            }

            await tx.competition_submission.upsert({
                where: {
                    team_id_competition_id: {
                        team_id,
                        competition_id: team.competition_id,
                    },
                },
                update: {
                    submission_object: finalPayload,
                    updated_at: new Date(),
                },
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
        throw { status: 500, message: error.message || "Submission Failed" };
    }
};

module.exports = { upsertTeamSubmission };
