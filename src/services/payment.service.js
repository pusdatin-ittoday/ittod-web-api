const prisma = require("../prisma.js");
const { uploadFileToR2 } = require("./r2.service");

const uploadPaymentCompetition = async ({ team_id, payment_proof }) => {
    const team = await prisma.team.findUnique({
        where: { id: team_id },
    });

    if (!team) {
        throw { status: 400, message: "Team does not exist!" };
    }

    try {
        return await prisma.$transaction(async tx => {
            let payment_proof_key = null;

            if (payment_proof) {
                try {
                    const { buffer, originalname, mimetype } = payment_proof;
                    payment_proof_key = (await uploadFileToR2(
                        buffer,
                        originalname,
                        mimetype
                    )).key;
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

            return { message: "Payment uploaded successfully!", team: updatedTeam };
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