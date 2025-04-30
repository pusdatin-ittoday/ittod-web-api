import * as compService from "../services/competition.service.mjs";

export const registerCompetition = async (req, res) => {
    try {
        const leader_id = req.user.id;
        const result = await compService.registerTeamThenInsertLeader({
            ...req.body,
            leader_id,
        });
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};
