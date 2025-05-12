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
                const { buffer, originalname, mimetype } = ktm;
                ktm_key = (await uploadFileToR2(buffer, originalname, mimetype)).key;
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
        throw { status: 500, message: "Failed to edit profile." };
    }
};

module.exports = { editUserProfile };
