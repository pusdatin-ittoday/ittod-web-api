import { Router } from "express";
import {
    joinCompetitionWithTeamCode,
    registerCompetition,
} from "../controllers/competition.controller.mjs";
import { isAuthenticated } from "../middleware/authMiddleware.mjs";

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

export default compeRouter;
