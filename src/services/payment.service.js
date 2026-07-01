const prisma = require("../prisma.js");
const { uploadFileToR2 } = require("./r2.service");

const uploadPaymentCompetition = async ({ team_id, payment_proof, user_id }) => {
    const team = await prisma.team.findUnique({
        where: { id: team_id },
    });

    if (!team) {
        throw { status: 400, message: "Team does not exist!" };
    }

    try {
        return await prisma.$transaction(async tx => {
            // payment_proof is optional:
            // may be null when the user skips uploading a file,
            // the file fails validation, upload is cancelled, etc.
            let payment_proof_key = null;

            if (payment_proof) {
                try {
                    const { buffer, originalname, mimetype } = payment_proof;
                    const r2Result = await uploadFileToR2(buffer, originalname, mimetype);
                    payment_proof_key = r2Result.key;

                    await tx.media.create({
                        data: {
                            id: payment_proof_key,
                            uploader_id: user_id,
                            name: payment_proof_key,
                            grouping: "payments",
                            type: mimetype.includes("pdf") ? "pdf" : "image",
                            url: r2Result.url
                        }
                    });
                } catch (uploadError) {
                    console.error("Payment_Proof upload failed:", uploadError);
                    throw {
                        status: 500,
                        message: "Failed to upload Payment_Proof file.",
                    };
                }
            }

            const updatedTeam = await tx.team.update({
                where: { id: team_id },
                data: { payment_proof_id: payment_proof_key },
            });

            return {
                message: "Payment uploaded successfully!",
                team: updatedTeam,
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
                details: err.message,
            };
        }
    }
};

module.exports = { uploadPaymentCompetition };
