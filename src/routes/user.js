const { Router } = require("express");
const { editUserProfileController } = require("../controllers/user.controller");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { validateUserProfile } = require("../middleware/userDataMiddleware");
const { validateFile } = require("../middleware/imageValidator");

const multer = require("multer");

const images = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB limit
    }
}); // Use memory storage for Buffer
const usersRouter = Router();

usersRouter.patch(
    "/api/user",
    isAuthenticated,
    images.single("image"),
    validateFile,
    validateUserProfile,
    editUserProfileController
);

module.exports = usersRouter;
