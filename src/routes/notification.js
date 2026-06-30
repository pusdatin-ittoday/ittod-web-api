const { Router } = require("express");
const {
    getNotifications,
    getUnreadCount,
    markAsRead,
    markAllAsRead,
} = require("../controllers/notification.controller");

const notificationRouter = Router();

// Get all notifications for authenticated user
notificationRouter.get("/api/notifications", getNotifications);

// Get unread count
notificationRouter.get("/api/notifications/unread-count", getUnreadCount);

// Mark notification as read
notificationRouter.patch("/api/notifications/:id/read", markAsRead);

// Mark all notifications as read
notificationRouter.patch("/api/notifications/read-all", markAllAsRead);

module.exports = notificationRouter;
