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

        const { user_id } = req.params;
        const ktm = req.file; // Assuming file upload middleware is used

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
            ktm,
            user_id,
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

module.exports = { editUserProfileController };