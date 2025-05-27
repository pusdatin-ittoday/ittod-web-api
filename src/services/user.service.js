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

            const dataToUpdate = {
                full_name,
                birth_date: birth_date ? new Date(birth_date) : undefined,
                pendidikan,
                nama_sekolah,
                id_discord,
                id_line,
                id_instagram,
                jenis_kelamin,
                phone_number,
                ...(ktm_key && { ktm_key: ktm_key }),
            };

            // Remove undefined, null, or empty string fields
            Object.keys(dataToUpdate).forEach(key => {
                if (
                    dataToUpdate[key] === undefined ||
                    dataToUpdate[key] === null ||
                    dataToUpdate[key] === ""
                ) {
                    delete dataToUpdate[key];
                }
            });

            // Update user profile
            await tx.user.update({
                where: { id: user_id },
                data: dataToUpdate,
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

const viewUserDataService = async user_id => {
    if (!user_id) {
        throw { status: 400, message: "User ID is required!" };
    }
    try {
        const user = await prisma.user.findUnique({
            where: { id: user_id },
            select: {
                id: true,
                full_name: true,
                email: true,
                birth_date: true,
                pendidikan: true,
                nama_sekolah: true,
                phone_number: true,
                id_line: true,
                id_discord: true,
                id_instagram: true,
                jenis_kelamin: true, // <-- Add this line
                is_registration_complete: true,
                ktm_key: true,
                twibbon_key: true,
            },
        });
        if (!user) {
            throw { status: 404, message: "User not found!" };
        }
        return user;
    } catch (err) {
        console.error("View User Data Error:", err);
        if (err.status) {
            throw err;
        } else {
            throw {
                status: 500,
                message: "Failed to retrieve user data.",
                details: err.message,
            };
        }
    }
};
module.exports = { editUserProfile, viewUserDataService };
