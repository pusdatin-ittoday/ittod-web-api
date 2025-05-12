const { Router } = require("express");
const { editUserProfileController } = require("../controllers/user.controller");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { validateUserProfile } = require("../middleware/userDataMiddleware");
const { validateFile } = require("../middleware/imageValidator");

const multer = require("multer");

const images = multer({ storage: multer.memoryStorage() }); // Use memory storage for Buffer
const usersRouter = Router();

usersRouter.put(
    "/api/user",
    isAuthenticated,
    images.single("image"),
    validateUserProfile,
    validateFile,
    editUserProfileController
);

module.exports = usersRouter;
