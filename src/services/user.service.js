const prisma = require("../prisma.js");
const { uploadFileToR2 } = require("./r2.service");

const editUserProfile = async ({
    full_name,
    birth_date,
    phone_number,
    jenis_kelamin,
    id_line,
    id_discord,
    id_instagram,
    pendidikan,
    nama_sekolah,
    ktm,
    user_id,
}) => {
    if (!user_id) {
        throw { status: 400, message: "User ID is required!" };
    }

    const user = await prisma.user.findUnique({ where: { id: user_id } });
    if (!user) {
        throw { status: 404, message: "User not found!" };
    }

    try {
        await prisma.$transaction(async tx => {
            let ktm_key = null;

            if (ktm) {
                try {
                    const { buffer, originalname, mimetype } = ktm;
                    ktm_key = (
                        await uploadFileToR2(buffer, originalname, mimetype)
                    ).key;
                } catch (uploadError) {
                    console.error("KTM upload failed:", uploadError);
                    throw {
                        status: 500,
                        message: "Failed to upload KTM file.",
                    };
                }
            }

            const updateData = {
                full_name,
                birth_date,
                pendidikan,
                nama_sekolah,
                id_discord,
                id_line,
                id_instagram,
                jenis_kelamin,
                phone_number,
                ...(ktm_key && { ktm_key: ktm_key }),
            };

            // Remove undefined fields
            Object.keys(updateData).forEach(
                key => updateData[key] === undefined && delete updateData[key]
            );

            // Update user profile
            await tx.user.update({
                where: { id: user_id },
                data: updateData,
            });
        });

        return { message: "Profile updated successfully!" };
    } catch (err) {
        console.error("Edit Error:", err);
        if (err.status) {
            // If it's already a structured error with status, rethrow it
            throw err;
        } else if (err.code === "P2002") {
            // Handle Prisma unique constraint violation
            throw { status: 400, message: "A field value must be unique." };
        } else {
            // For other errors
            throw {
                status: 500,
                message: "Failed to edit profile.",
                details: err.message,
            };
        }
    }
};

module.exports = { editUserProfile };
