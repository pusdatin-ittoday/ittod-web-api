import { Router } from "express";
import {
    joinCompetitionWithTeamCode,
    registerCompetition,
} from "../controllers/competition.controller.mjs";

const compeRouter = Router();

compeRouter.post("/api/competition/register", registerCompetition);

compeRouter.post("/api/competition/join", joinCompetitionWithTeamCode);
