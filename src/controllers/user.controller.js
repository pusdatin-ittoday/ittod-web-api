const { editUserProfile } = require("../services/user.service");

const editUserProfileController = async (req, res) => {
    try {
        const {
            full_name,
            birth_date,
            phone_number,
            jenis_kelamin,
            id_line,
            id_discord,
            id_instagram,
            pendidikan,
            nama_sekolah,
        } = req.body;

        const user_id = req.user?.id;
        if (!user_id) {
            return res.status(400).json({ message: "User ID is missing" });
        }

        const profileImage = req.files?.profileImage?.[0];
        const userTwibbon = req.files?.userTwibbon?.[0];

        const result = await editUserProfile({
            full_name,
            birth_date,
            phone_number,
            jenis_kelamin,
            id_line,
            id_discord,
            id_instagram,
            pendidikan,
            nama_sekolah,
            ktm: profileImage,          // tambahkan ini
            twibbon: userTwibbon,       // tambahkan ini
            user_id,
        });

        res.status(200).json(result);
    } catch (error) {
        console.error("Edit User Profile Error:", error);
        res.status(error.status || 500).json({ message: error.message });
    }
};

module.exports = { editUserProfileController };