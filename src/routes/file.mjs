import { Router } from "express";
import { fileServ } from "../controllers/file.controller.mjs";
import { isAuthenticated } from "../middleware/authMiddleware.mjs";
import { validateFile } from "../middleware/fileMiddleware.mjs";

const fileRouter = Router();

fileRouter.post("/api/file", isAuthenticated, validateFile, fileServ);

export default fileRouter;
