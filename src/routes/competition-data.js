const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { getCompetitionData } = require("../controllers/competition-data.controller.js");

const competitionDataRouter = Router();

// Get competition data
competitionDataRouter.get(
    "/api/competition-data",
    isAuthenticated,
    getCompetitionData
);

module.exports = competitionDataRouter; 