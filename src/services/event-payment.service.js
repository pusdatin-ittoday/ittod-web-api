const prisma = require("../prisma.js");
const crypto = require("crypto");
const { uploadFileToR2 } = require("./r2.service");

const ALLOWED_MIME_TYPES = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
    "application/pdf",
];

const validatePaymentProofFile = ({ user_id, payment_proof }) => {
    if (!user_id) {
        throw {
            status: 400,
            message: "user_id is required.",
        };
    }

    if (!payment_proof) {
        throw {
            status: 400,
            message: "payment_proof file is required.",
        };
    }

    const { buffer, originalname, mimetype } = payment_proof;
    if (!buffer || !originalname || !mimetype) {
        throw {
            status: 400,
            message: "Invalid payment_proof object. Must include buffer, originalname, and mimetype.",
        };
    }

    if (!ALLOWED_MIME_TYPES.includes(mimetype)) {
        throw {
            status: 400,
            message: "Invalid file type. Only JPEG, PNG, WebP, and PDF are allowed.",
        };
    }

    return true;
};

const uploadEventPaymentService = async ({ user_id, payment_proof, event_id = "Workshop" }) => {
    validatePaymentProofFile({ user_id, payment_proof });

    const { buffer, originalname, mimetype } = payment_proof;

    let payment_proof_key = null;
    try {
        const r2Result = await uploadFileToR2(buffer, originalname, mimetype);
        payment_proof_key = r2Result.key;
    } catch (uploadError) {
        console.error("Payment proof upload failed:", uploadError);
        throw {
            status: 500,
            message: "Failed to upload payment_proof file.",
        };
    }

    // Resolve event in DB by ID, slug, or title
    const searchTarget = (event_id || "").toLowerCase();
    const targetEvent = await prisma.event.findFirst({
        where: {
            OR: [
                { id: event_id },
                { slug: searchTarget },
                { title: { contains: searchTarget } },
            ],
        },
    });

    const resolvedEventId = targetEvent ? targetEvent.id : (event_id || "Workshop");
    const eventTitle = targetEvent?.title || event_id || "Event";

    try {
        return await prisma.$transaction(async tx => {
            const user = await tx.user.findUnique({
                where: { id: user_id },
                select: {
                    id: true,
                    full_name: true,
                    phone_number: true,
                    nama_sekolah: true,
                },
            });

            // Create media record for payment proof
            const mediaId = crypto.randomUUID();
            await tx.media.create({
                data: {
                    id: mediaId,
                    name: payment_proof_key,
                    url: payment_proof_key,
                    grouping: "payments",
                    uploader_id: user_id,
                    type: mimetype.includes("pdf") ? "pdf" : "image",
                },
            });

            // Update or create individual team payment link
            const existingTeam = await tx.team.findFirst({
                where: {
                    competition_id: resolvedEventId,
                    members: {
                        some: { user_id },
                    },
                },
            });

            if (existingTeam) {
                await tx.team.update({
                    where: { id: existingTeam.id },
                    data: {
                        payment_proof_id: mediaId,
                        is_document_verified: "approved",
                        is_verified: "pending",
                    },
                });
                await tx.team_member.updateMany({
                    where: { team_id: existingTeam.id, user_id },
                    data: { is_verified: false },
                });
            } else {
                const teamId = crypto.randomUUID();
                let team_code;
                let existingTeamWithCode;
                do {
                    team_code = crypto.randomBytes(6).toString("base64url");
                    existingTeamWithCode = await tx.team.findUnique({
                        where: { team_code },
                    });
                } while (existingTeamWithCode);

                const teamName = user?.full_name 
                    ? `[${eventTitle}] ${user.full_name}` 
                    : `[${eventTitle}] ${user_id}`;

                await tx.team.create({
                    data: {
                        id: teamId,
                        competition_id: resolvedEventId,
                        team_name: teamName,
                        team_code,
                        max_member: 1,
                        payment_proof_id: mediaId,
                        is_document_verified: "approved",
                        is_verified: "pending",
                        members: {
                            create: {
                                user_id,
                                role: "leader",
                                is_verified: false,
                            },
                        },
                    },
                });
            }

            // Update or create event participant
            const existingParticipant = await tx.event_participant.findFirst({
                where: {
                    user_id,
                    event_id: resolvedEventId,
                },
            });

            let updatedParticipantRow;
            if (existingParticipant) {
                updatedParticipantRow = await tx.event_participant.update({
                    where: {
                        user_id_event_id: {
                            user_id,
                            event_id: existingParticipant.event_id,
                        },
                    },
                    data: {
                        payment_proof: payment_proof_key,
                        payment_verification: "pending",
                    },
                });
            } else {
                updatedParticipantRow = await tx.event_participant.create({
                    data: {
                        user_id,
                        event_id: resolvedEventId,
                        payment_proof: payment_proof_key,
                        payment_verification: "pending",
                        date_added: new Date(),
                    },
                });
            }

            return {
                message: "Payment uploaded successfully!",
                event_participant: updatedParticipantRow,
            };
        });
    } catch (err) {
        console.error("Event Payment Error:", err);
        if (err.status) throw err;
        throw {
            status: 500,
            message: err.message || "Failed to process event payment.",
        };
    }
};

module.exports = {
    validatePaymentProofFile,
    uploadEventPaymentService,
};
