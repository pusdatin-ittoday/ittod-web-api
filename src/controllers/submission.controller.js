const {
    upsertTeamSubmission,
} = require("../services/competition-submission.service");

const upsertSubmissionController = async (req, res) => {
    try {
        const { team_id, submission_object } = req.body;

        const result = await upsertTeamSubmission(team_id, submission_object);
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

module.exports = { upsertSubmissionController };
