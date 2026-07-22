const adminAnnouncementService = require("../services/admin-announcement.service");

// Create Announcement
const createAnnouncement = async (req, res) => {
    try {
        const { title, description, event_id, is_pinned } = req.body;
        const author_id = req.user.id;

        const result = await adminAnnouncementService.createAnnouncement({
            title,
            description,
            event_id,
            is_pinned,
            author_id,
        });

        res.status(201).json({
            success: true,
            message: result.message,
            data: result.data,
        });
    } catch (error) {
        console.error("Error creating announcement:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

// Update Announcement
const updateAnnouncement = async (req, res) => {
    try {
        const { announcementId } = req.params;
        const result = await adminAnnouncementService.updateAnnouncement(announcementId, req.body);

        res.status(200).json({
            success: true,
            message: result.message,
            data: result.data,
        });
    } catch (error) {
        console.error("Error updating announcement:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

// Delete Announcement
const deleteAnnouncement = async (req, res) => {
    try {
        const { announcementId } = req.params;
        const result = await adminAnnouncementService.deleteAnnouncement(announcementId);

        res.status(200).json({
            success: true,
            message: result.message,
            data: result,
        });
    } catch (error) {
        console.error("Error deleting announcement:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

module.exports = {
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
};
