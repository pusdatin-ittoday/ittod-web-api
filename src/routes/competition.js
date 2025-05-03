const { Router } = require('express');
const { joinCompetitionWithTeamCode,
    registerCompetition, } = require('../controllers/competition.controller.js');
const { isAuthenticated } = require('../middleware/authMiddleware.js');

const compeRouter = Router();

compeRouter.post(
    "/api/competition/register",
    isAuthenticated,
    registerCompetition
);

compeRouter.post(
    "/api/competition/join",
    isAuthenticated,
    joinCompetitionWithTeamCode
);

module.exports = compeRouter;
