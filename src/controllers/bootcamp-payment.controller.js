const { uploadPaymentCompetition } = require("../services/bootcamp-payment.service");

const uploadPaymentController = async (req, res) => {
    try {
        const { team_id } = req.body;
        const payment_proof = req.file;

        if (!team_id) {
            return res.status(400).json({ message: "Team ID is required" });
        }
        if (!payment_proof) {
            return res.status(400).json({ message: "Payment proof file is required" });
        }

        const result = await uploadPaymentCompetition({
            team_id,
            payment_proof,
        });
        res.status(200).json(result);
    } catch (error) {
        console.error("Payment Upload Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { uploadPaymentController };