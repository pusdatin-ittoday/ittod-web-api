const prisma = require("../prisma.js");

// List all users with pagination and optional search filter
const getUsersList = async (page = 1, limit = 10, search = "") => {
    if (page < 1) page = 1;
    if (limit < 1) limit = 10;
    if (limit > 100) limit = 100;

    const skip = (page - 1) * limit;

    const whereCondition = search && search.trim() !== ""
        ? {
            OR: [
                { full_name: { contains: search.trim() } },
                { email: { contains: search.trim() } },
            ],
        }
        : {};

    const [users, totalUsers] = await prisma.$transaction([
        prisma.user.findMany({
            where: whereCondition,
            select: {
                id: true,
                full_name: true,
                email: true,
                phone_number: true,
                jenis_kelamin: true,
                pendidikan: true,
                nama_sekolah: true,
                is_registration_complete: true,
                created_at: true,
                identity: {
                    select: {
                        role: true,
                        provider: true,
                        is_verified: true,
                    },
                },
            },
            orderBy: { created_at: "desc" },
            skip,
            take: limit,
        }),
        prisma.user.count({ where: whereCondition }),
    ]);

    const totalPages = Math.ceil(totalUsers / limit);

    return {
        users,
        pagination: {
            current_page: page,
            total_pages: totalPages,
            total_users: totalUsers,
            limit,
        },
    };
};

// Get User Detail with Team Memberships and Event Participations
const getUserDetail = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            identity: {
                select: {
                    role: true,
                    provider: true,
                    is_verified: true,
                    created_at: true,
                },
            },
            team_members: {
                include: {
                    team: {
                        select: {
                            id: true,
                            team_name: true,
                            team_code: true,
                            competition: { select: { title: true } },
                        },
                    },
                },
            },
            event_participants: {
                include: {
                    event: { select: { id: true, title: true, type: true } },
                },
            },
        },
    });

    if (!user) throw { status: 404, message: "User not found" };
    return user;
};

// Update User Profile Details
const updateUser = async (userId, data) => {
    const existingUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!existingUser) throw { status: 404, message: "User not found" };

    const updateData = {};
    if (data.full_name) updateData.full_name = data.full_name;
    if (data.phone_number) updateData.phone_number = data.phone_number;
    if (data.jenis_kelamin) updateData.jenis_kelamin = data.jenis_kelamin;
    if (data.pendidikan) updateData.pendidikan = data.pendidikan;
    if (data.nama_sekolah) updateData.nama_sekolah = data.nama_sekolah;
    if (data.id_line !== undefined) updateData.id_line = data.id_line;
    if (data.id_discord !== undefined) updateData.id_discord = data.id_discord;
    if (data.id_instagram !== undefined) updateData.id_instagram = data.id_instagram;
    if (data.is_registration_complete !== undefined) {
        updateData.is_registration_complete = data.is_registration_complete ? 1 : 0;
    }

    const updated = await prisma.user.update({
        where: { id: userId },
        data: updateData,
    });

    return { message: "User profile updated successfully", data: updated };
};

// Change User Role (Superadmin Only)
const changeUserRole = async (userId, newRole) => {
    const validRoles = ["superadmin", "admin_keuangan", "admin_biasa", "panitia_lomba", "panitia", "user"];
    if (!validRoles.includes(newRole)) {
        throw { status: 400, message: `Invalid role. Must be one of: ${validRoles.join(", ")}` };
    }

    const identity = await prisma.user_identity.findUnique({ where: { id: userId } });
    if (!identity) throw { status: 404, message: "User identity record not found" };

    const updated = await prisma.user_identity.update({
        where: { id: userId },
        data: { role: newRole },
        select: { id: true, email: true, role: true },
    });

    return { message: "User role updated successfully", data: updated };
};

// Delete User Account (Superadmin Only)
const deleteUser = async (userId) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw { status: 404, message: "User not found" };

    return prisma.$transaction(async (tx) => {
        // Delete team membership relations
        await tx.team_member.deleteMany({ where: { user_id: userId } });
        // Delete event participant relations
        await tx.event_participant.deleteMany({ where: { user_id: userId } });
        // Delete notifications
        await tx.notification.deleteMany({ where: { user_id: userId } });
        // Delete event staff entries
        await tx.event_staff.deleteMany({ where: { user_id: userId } });
        // Delete user identity if present
        await tx.user_identity.deleteMany({ where: { id: userId } });
        // Delete user record
        await tx.user.delete({ where: { id: userId } });

        return { message: "User account deleted successfully", user_id: userId };
    });
};

module.exports = {
    getUsersList,
    getUserDetail,
    updateUser,
    changeUserRole,
    deleteUser,
};
