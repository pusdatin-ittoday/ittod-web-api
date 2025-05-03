const { Router } = require('express');
const { joinCompetitionWithTeamCode,
    registerCompetition, } = require('../controllers/competition.controller.cjs');
const { isAuthenticated } = require('../middleware/authMiddleware.cjs');

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
