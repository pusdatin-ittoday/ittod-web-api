import * as compService from "../services/competition.service.mjs";

export const registerCompetition = async (req, res) => {
    try {
        // Validate required fields
        const { competition_id, team_name } = req.body;
        if (!competition_id || !team_name) {
            return res.status(400).json({
                error: "Missing required fields",
                details: {
                    competition_id: competition_id
                        ? undefined
                        : "Competition ID is required",
                    team_name: team_name ? undefined : "Team name is required",
                },
            });
        }
        const leader_id = req.user.id;
        const result = await compService.registerTeamThenInsertLeader({
            competition_id,
            team_name,
            leader_id,
        });
        res.status(201).json(result);
    } catch (err) {
        console.error("Error registering competition team:", err);
        if (err.code === "P2002") {
            return res.status(409).json({ error: "Team name already exists" });
        }
        if (err.code === "P2003") {
            return res.status(404).json({ error: "Competition not found" });
        }
        res.status(err.status || 500).json({
            error:
                err.message ||
                "An error occurred while registering for the competition",
        });
    }
};

export const joinCompetitionWithTeamCode = async (req, res) => {
    try {
        // Ensure required field
        const { team_code } = req.body;
        if (!team_code) {
            return res.status(400).json({ error: "Team code is required" });
        }
        const user_id = req.user.id;
        const result = await compService.memberJoinWithTeamCode({
            team_code,
            user_id,
        });
        res.status(201).json(result);
    } catch (err) {
        console.error("Error in joinCompetitionWithTeamCode:", err);
        // Map known errors to status codes
        if (err.message.includes("not found")) {
            return res.status(404).json({ error: err.message });
        }
        if (err.message.includes("already a member")) {
            return res.status(409).json({ error: err.message });
        }
        // Fallback for other errors
        res.status(err.status || 500).json({
            error: err.message || "Failed to join competition",
        });
    }
};
