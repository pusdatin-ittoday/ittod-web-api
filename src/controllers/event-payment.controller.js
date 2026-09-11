const { uploadEventPaymentService } = require("../services/event-payment.service");

const uploadEventPaymentController = async (req, res) => {
    try {
        const user_id = req.user.id;
        const payment_proof = req.file;
        const event_id = req.body.event_id || req.body.eventId || "Workshop";

        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }
        if (!payment_proof) {
            return res.status(400).json({ message: "Payment proof file is required" });
        }

        const result = await uploadEventPaymentService({
            user_id,
            payment_proof,
            event_id,
        });

        res.status(200).json(result);
    } catch (error) {
        console.error("Event Payment Upload Error:", error);
        res.status(error.status || 500).json({
            message: error.message || "Failed to upload payment proof.",
            error: error.message || "Failed to upload payment proof.",
        });
    }
};

module.exports = { uploadEventPaymentController };
