const competitionService = require("../services/admin.services");

const getCompetitionById = async (req, res) => {
    try {
        const { id } = req.params;

        const competition = await competitionService.getCompetitionById(id);

        if (!competition) {
            return res.status(404).json({
                success: false,
                message: `Competition with id : ${id} not found`,
            });
        }

        res.status(200).json({
            success: true,
            message: "competition fetched successfully",
            data: competition,
        });
    } catch (error) {
        console.error("Error fetching competition", error);
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message || error,
        });
    }
};

const getCompetitionList = async (req, res) => {
    try {
        const competitionList = await competitionService.getCompetitionList();
        res.status(200).json({
            success: true,
            data: competitionList,
        });
    } catch (error) {
        console.error("error retrieving competition list", error);
        res.status(500).json({
            success: false,
            message: error.message || error,
        });
    }
};

module.exports = { getCompetitionById, getCompetitionList };
