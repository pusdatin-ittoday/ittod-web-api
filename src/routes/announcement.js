const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { getAllAnnouncements } = require("../controllers/announcement.controller.js");

const announcementRouter = Router();

// Get all announcements
announcementRouter.get(
    "/api/announcements",
    isAuthenticated,
    getAllAnnouncements
);

module.exports = announcementRouter; 