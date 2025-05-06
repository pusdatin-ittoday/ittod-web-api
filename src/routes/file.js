const { Router } = require("express");
const { fileServ } = require("../controllers/file.controller.js");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { isMemberOfTeam , validateFile } = require("../middleware/fileMiddleware.js");
const { fileServUpdate } = require("../controllers/file.controller");

const fileRouter = Router();

fileRouter.post("/api/file", isAuthenticated, validateFile, isMemberOfTeam, fileServ);
fileRouter.put("/api/file", isAuthenticated, validateFile, isMemberOfTeam, fileServUpdate);


module.exports = fileRouter;
