const {viewUserDataService} = require("../services/user.service")

const viewUserData = async (req, res) => {
    try {
        const user_id = req.user?.id; // Ensure `req.user` exists
        if (!user_id) {
            return res.status(400).json({ message: "User ID is missing" });
        }
        const userData = await viewUserDataService(user_id);
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(userData);
    } catch (error) {
        console.error("View User Data Error:", error);
        res.status(error.status || 500).json({ message: error.message });
    }
}

module.exports = { viewUserData }