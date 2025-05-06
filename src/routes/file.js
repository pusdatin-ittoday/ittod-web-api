const { Router } = require("express");
const { fileServ } = require("../controllers/file.controller.js");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { isMemberOfTeam , validateFile } = require("../middleware/fileMiddleware.js");

const fileRouter = Router();

fileRouter.post("/api/file", isAuthenticated, validateFile, isMemberOfTeam, fileServ);

module.exports = fileRouter;
