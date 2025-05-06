const { submitTeamFile } = require("../services/file.service.js");

const fileServ = async (req, res) => {
    try {
        const { title, url_file, team_id } = req.body;
        const user_id = req.user.id;

        const result = await submitTeamFile({
            title,
            url_file,
            team_id,
            user_id,
        });
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

module.exports = {fileServ}