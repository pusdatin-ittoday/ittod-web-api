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
    twibbon,
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
            let twibbon_key = null;
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
                        message: "Failed to upload Twibbon file.",
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
                ...(twibbon_key && { twibbon_key: twibbon_key }),
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

            // Recalculate is_registration_complete status
            const updatedUser = await tx.user.findUnique({
                where: { id: user_id },
            });

            const isFieldFilled = (val) => {
                return val !== null && val !== undefined && String(val).trim() !== "";
            };

            const isRegistrationComplete = !!(
                isFieldFilled(updatedUser.full_name) &&
                updatedUser.birth_date &&
                isFieldFilled(updatedUser.phone_number) &&
                isFieldFilled(updatedUser.jenis_kelamin) &&
                isFieldFilled(updatedUser.id_discord) &&
                isFieldFilled(updatedUser.id_instagram) &&
                isFieldFilled(updatedUser.pendidikan) &&
                isFieldFilled(updatedUser.nama_sekolah) &&
                isFieldFilled(updatedUser.ktm_key) &&
                isFieldFilled(updatedUser.twibbon_key)
            );

            await tx.user.update({
                where: { id: user_id },
                data: {
                    is_registration_complete: isRegistrationComplete ? 1 : 0
                }
            });

            // Reset verification status for the member in all teams
            await tx.team_member.updateMany({
                where: { user_id: user_id },
                data: {
                    verification_error: null,
                    is_verified: false,
                }
            });

            // Find all teams this user belongs to
            const memberTeams = await tx.team_member.findMany({
                where: { user_id: user_id },
                select: { team_id: true }
            });
            const teamIds = memberTeams.map(t => t.team_id);

            // Reset team verification status to pending if it was rejected
            if (teamIds.length > 0) {
                await tx.team.updateMany({
                    where: {
                        id: { in: teamIds },
                        is_document_verified: "rejected"
                    },
                    data: {
                        is_document_verified: "pending",
                        verification_error: null,
                    }
                });
            }
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
                is_registration_complete: true,
                ktm_key: true,
                twibbon_key: true,
                jenis_kelamin: true,
                last_read_announcements_at: true,
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

const markAnnouncementsAsRead = async (user_id) => {
    if (!user_id) {
        throw { status: 400, message: "User ID is required!" };
    }
    try {
        await prisma.user.update({
            where: { id: user_id },
            data: { last_read_announcements_at: new Date() }
        });
        return { message: "Announcements marked as read successfully." };
    } catch (err) {
        console.error("Mark Announcements As Read Error:", err);
        throw {
            status: 500,
            message: "Failed to mark announcements as read.",
            details: err.message,
        };
    }
};

module.exports = { editUserProfile, viewUserDataService, markAnnouncementsAsRead };
