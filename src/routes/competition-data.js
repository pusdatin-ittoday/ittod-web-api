const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { getCompetitionData, getUserCompetitionData } = require("../controllers/competition-data.controller.js");

const competitionDataRouter = Router();

// Get competition data
competitionDataRouter.get(
    "/api/competition-data",
    isAuthenticated,
    getCompetitionData
);

competitionDataRouter.get(
    "/api/user/competition-data",
    isAuthenticated,
    getUserCompetitionData
);

module.exports = competitionDataRouter; 