const { Router } = require("express");
const { fileServ } = require("../controllers/file.controller.js");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { validateFile } = require("../middleware/fileMiddleware.js");

const fileRouter = Router();

fileRouter.post("/api/file", isAuthenticated, validateFile, fileServ);

module.exports = fileRouter;
