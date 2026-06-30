const prisma = require("../prisma.js");

/**
 * Create a notification for a user
 */
async function createNotification(userId, title, message, type = "info", relatedId = null) {
    const notification = await prisma.notification.create({
        data: {
            id: crypto.randomUUID(),
            user_id: userId,
            title,
            message,
            type,
            related_id: relatedId,
        },
    });
    return notification;
}

/**
 * Get notifications for a user
 */
async function getNotifications(userId, options = {}) {
    const { unreadOnly = false, limit = 20 } = options;
    
    const where = { user_id: userId };
    if (unreadOnly) {
        where.is_read = 0;
    }

    const notifications = await prisma.notification.findMany({
        where,
        orderBy: { created_at: "desc" },
        take: limit,
    });

    return notifications;
}

/**
 * Mark notification as read
 */
async function markAsRead(notificationId, userId) {
    const notification = await prisma.notification.updateMany({
        where: {
            id: notificationId,
            user_id: userId,
        },
        data: {
            is_read: 1,
        },
    });
    return notification;
}

/**
 * Mark all notifications as read for a user
 */
async function markAllAsRead(userId) {
    const result = await prisma.notification.updateMany({
        where: {
            user_id: userId,
            is_read: 0,
        },
        data: {
            is_read: 1,
        },
    });
    return result;
}

/**
 * Get unread count for a user
 */
async function getUnreadCount(userId) {
    const count = await prisma.notification.count({
        where: {
            user_id: userId,
            is_read: 0,
        },
    });
    return count;
}

/**
 * Notify team rejection with reason
 */
async function notifyTeamRejection(teamId, reason) {
    const team = await prisma.team.findUnique({
        where: { id: teamId },
        include: {
            members: {
                include: { user: true },
            },
        },
    });

    if (!team) return null;

    const notifications = [];
    for (const member of team.members) {
        const notification = await createNotification(
            member.user.identity?.id || member.user_id,
            "Berkas Tim Ditolak",
            `Berkas tim "${team.team_name}" ditolak. Alasan: ${reason}`,
            "error",
            team.id
        );
        notifications.push(notification);
    }

    return notifications;
}

/**
 * Notify payment rejection
 */
async function notifyPaymentRejection(userId, teamName, reason) {
    const notification = await createNotification(
        userId,
        "Pembayaran Ditolak",
        `Pembayaran untuk tim "${teamName}" ditolak. Alasan: ${reason}`,
        "error"
    );
    return notification;
}

/**
 * Notify payment acceptance
 */
async function notifyPaymentAccepted(userId, teamName) {
    const notification = await createNotification(
        userId,
        "Pembayaran Diterima",
        `Pembayaran untuk tim "${teamName}" telah diterima.`,
        "success"
    );
    return notification;
}

module.exports = {
    createNotification,
    getNotifications,
    markAsRead,
    markAllAsRead,
    getUnreadCount,
    notifyTeamRejection,
    notifyPaymentRejection,
    notifyPaymentAccepted,
};
