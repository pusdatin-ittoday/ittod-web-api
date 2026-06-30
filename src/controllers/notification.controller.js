const notificationService = require("../services/notification.service");

/**
 * Get all notifications for authenticated user
 */
async function getNotifications(req, res) {
    try {
        const userId = req.user.id;
        const { unread_only, limit } = req.query;

        const notifications = await notificationService.getNotifications(userId, {
            unreadOnly: unread_only === "true",
            limit: limit ? parseInt(limit) : 20,
        });

        res.json({
            success: true,
            data: notifications,
        });
    } catch (error) {
        console.error("Get notifications error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get notifications",
        });
    }
}

/**
 * Get unread count
 */
async function getUnreadCount(req, res) {
    try {
        const userId = req.user.id;
        const count = await notificationService.getUnreadCount(userId);

        res.json({
            success: true,
            unread_count: count,
        });
    } catch (error) {
        console.error("Get unread count error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get unread count",
        });
    }
}

/**
 * Mark notification as read
 */
async function markAsRead(req, res) {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        await notificationService.markAsRead(id, userId);

        res.json({
            success: true,
            message: "Notification marked as read",
        });
    } catch (error) {
        console.error("Mark as read error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to mark notification as read",
        });
    }
}

/**
 * Mark all notifications as read
 */
async function markAllAsRead(req, res) {
    try {
        const userId = req.user.id;

        await notificationService.markAllAsRead(userId);

        res.json({
            success: true,
            message: "All notifications marked as read",
        });
    } catch (error) {
        console.error("Mark all as read error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to mark all notifications as read",
        });
    }
}

module.exports = {
    getNotifications,
    getUnreadCount,
    markAsRead,
    markAllAsRead,
};
