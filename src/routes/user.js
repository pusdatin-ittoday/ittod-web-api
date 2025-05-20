const { Router } = require("express");
const { editUserProfileController } = require("../controllers/user.controller");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { validateUserProfile } = require("../middleware/userDataMiddleware");
const { validateFile } = require("../middleware/imageValidator");
const { putTwibbonUser } = require("../controllers/put-twibbon.controller")
const {viewUserData} = require("../controllers/user-view.controller")
const multer = require("multer");

const images = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB limit
    },
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

usersRouter.put(
    "/api/user/twibbon",
    isAuthenticated,
    images.single("image"),
    validateFile,
    putTwibbonUser
);

usersRouter.get(
    "/api/user",
    isAuthenticated,
    viewUserData,
)

module.exports = usersRouter;
