const feedbackService = require("../services/user-feedback.service.js");

exports.submitFeedback = async (req, res) => {
    try {
        const userId = req.user.id;
        const { subject, content } = req.body;
        const files = req.files || [];

        const result = await feedbackService.createFeedback({
            userId,
            subject,
            content,
            files,
        });

        res.status(201).json({
            success: true,
            ...result,
        });
    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Gagal mengirim feedback",
        });
    }
};

exports.getMyFeedbacks = async (req, res) => {
    try {
        const userId = req.user.id;
        const feedbacks = await feedbackService.getUserFeedbacks(userId);

        res.json({
            success: true,
            data: feedbacks,
        });
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        res.status(500).json({
            success: false,
            message: "Gagal memuat riwayat feedback",
        });
    }
};
