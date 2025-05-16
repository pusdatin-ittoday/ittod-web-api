const { uploadPaymentCompetition } = require("../services/payment.service");

const uploadPaymentController = async (req, res) => {
    try {
        const { team_id } = req.body;
        const payment_proof = req.file;

        const result = await uploadPaymentCompetition({
            team_id,
            payment_proof,
        });
        res.status(200).json(result);
    } catch (error) {
        console.error("Payment Upload Error:", error);
        res.status(error.status || 500).json({ message: error.message });
    }
};

module.exports = {uploadPaymentController}
