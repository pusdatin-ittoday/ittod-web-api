const prisma = require("../prisma.js");
const { uploadFileToR2 } = require("./r2.service");

const BOOTCAMP_EVENT_ID = "Bootcamp";

const uploadBootcampPaymentService = async ({ user_id, payment_proof }) => {
    if (!user_id) {
        throw {
            status: 400,
            message: "user_id is required.",
        };
    }

    let payment_proof_key = null;

    if (payment_proof) {
        const { buffer, originalname, mimetype } = payment_proof;
        if (!buffer || !originalname || !mimetype) {
            throw {
                status: 400,
                message:
                    "Invalid payment_proof object. Must include buffer, originalname, and mimetype.",
            };
        }

        const allowedMimeTypes = [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/webp",
            "application/pdf",
        ];
        if (!allowedMimeTypes.includes(mimetype)) {
            throw {
                status: 400,
                message:
                    "Invalid file type. Only JPEG, PNG, WebP, and PDF are allowed.",
            };
        }
        try {
            payment_proof_key = (
                await uploadFileToR2(buffer, originalname, mimetype)
            ).key;
        } catch (uploadError) {
            console.error("payment_proof upload failed:", uploadError);
            throw {
                status: 500,
                message: "Failed to upload payment_proof file.",
            };
        }
    } else {
        throw {
            status: 400,
            message: "payment_proof file is required.",
        };
    }

    try {
        return await prisma.$transaction(async tx => {
            const existingParticipant = await tx.event_participant.findUnique({
                where: {
                    user_id_event_id: {
                        user_id,
                        event_id: BOOTCAMP_EVENT_ID,
                    },
                },
            });

            let updatedParticipantRow;
            if (existingParticipant) {
                updatedParticipantRow = await tx.event_participant.update({
                    where: {
                        user_id_event_id: {
                            user_id,
                            event_id: BOOTCAMP_EVENT_ID,
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
                        event_id: BOOTCAMP_EVENT_ID,
                        payment_proof: payment_proof_key,
                        payment_verification: "pending",
                    },
                });
            }

            return {
                message: "Payment uploaded successfully!",
                event_participant: updatedParticipantRow,
            };
        });
    } catch (err) {
        console.error("Edit Error:", err);
        if (err.status) {
            throw err;
        } else if (err.code === "P2002") {
            throw { status: 400, message: "A field value must be unique." };
        } else {
            throw {
                status: 500,
                message: "Failed to upload Payment.",
                details:
                    process.env.NODE_ENV === "production"
                        ? undefined
                        : err.message,
            };
        }
    }
};

module.exports = { uploadBootcampPaymentService };
