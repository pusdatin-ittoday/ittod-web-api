const { uploadBootcampPaymentService } = require("../services/bootcamp-payment.service");

const uploadBootcampPaymentController = async (req, res) => {
    try {
        const user_id = req.user.id;
        const payment_proof = req.file;

        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }
        if (!payment_proof) {
            return res.status(400).json({ message: "Payment proof file is required" });
        }

        const result = await uploadBootcampPaymentService({
            user_id,
            payment_proof,
        });
        res.status(200).json(result);
    } catch (error) {
        console.error("Payment Upload Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { uploadBootcampPaymentController };