const prisma = require("../prisma.js");
const { uploadFileToR2 } = require("./r2.service");

const twibbonUploadService = async ({ user_id, twibbon }) => {
    const user = await prisma.user.findUnique({
        where: {
            id: user_id,
        },
        select: {
            id: true,
            full_name: true,
        },
    });

    if (!user) {
        throw { status: 400, message: "User does not exist!" };
    }

    try {
        return await prisma.$transaction(async tx => {
            let twibbon_key = null;
            if (twibbon) {
                try {
                    const { buffer, originalname, mimetype } = twibbon;
                    twibbon_key = (
                        await uploadFileToR2(buffer, originalname, mimetype)
                    ).key;
                } catch (uploadError) {
                    console.error("Twibbon upload failed:", uploadError);
                    throw {
                        status: 500,
                        message: "Failed to upload twibbon file.",
                    };
                }
            }

            const updatedUser = await tx.user.update({
                where: { id: user_id },
                data: { twibbon_key },
            });

            return {
                message: "Twibbon uploaded successfully!",
                team: updatedUser,
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

module.exports = {twibbonUploadService}
