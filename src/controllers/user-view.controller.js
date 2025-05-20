const {viewUserDataService} = require("../services/user.service")

const viewUserData = async (req,res) => {
    try {
        const user_id = req.user?.id; // Ensure `req.user` exists
        if (!user_id) {
            return res.status(400).json({ message: "User ID is missing" });
        }

        const userData = await viewUserDataService(user_id);
        return res.status(200).json(userData);
    } catch (error) {
        console.error("Edit User Profile Error:", error);
        res.status(error.status || 500).json({ message: error.message });
    }
}

module.exports = { viewUserData }