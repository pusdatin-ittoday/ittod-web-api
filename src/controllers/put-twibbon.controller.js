const { twibbonUploadService } = require("../services/twibbon.service");

const putTwibbonUser = async (req, res) => {
    try {
        const twibbon = req.file;
        const user_id = req.user.id;

        if (!twibbon) {
            return res
                .status(400)
                .json({ message: "twibbon image is required!" });
        }
        if (!user_id) {
            return res.status(400).json({ message: "user_id is required!" });
        }

        const result = await twibbonUploadService({ twibbon, user_id });

        res.status(200).json(result);
    } catch (error) {
        console.error("Twibbon Upload Error:", error);
        res.status(error.status || 500).json({ message: error.message });
    }
};

module.exports = { putTwibbonUser };
