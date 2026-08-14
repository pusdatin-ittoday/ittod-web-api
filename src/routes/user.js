const { Router } = require("express");
const { editUserProfileController, markAnnouncementsAsReadController } = require("../controllers/user.controller");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { validateUserProfile } = require("../middleware/userDataMiddleware");
const { validateFile } = require("../middleware/imageValidator");
const { putTwibbonUser } = require("../controllers/put-twibbon.controller");
const { viewUserData } = require("../controllers/user-view.controller");
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
    images.fields([
        { name: "profileImage", maxCount: 1 },
        { name: "userTwibbon", maxCount: 1 },
    ]),
    validateFile,
    validateUserProfile,
    editUserProfileController
);

usersRouter.put(
    "/api/user/twibbon",
    isAuthenticated,
    images.single("userTwibbon"),
    validateFile,
    putTwibbonUser
);

const { submitFeedback, getMyFeedbacks } = require("../controllers/user-feedback.controller");

const feedbackUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit per screenshot
    },
});

usersRouter.post(
    "/api/user/feedback",
    isAuthenticated,
    feedbackUpload.array("media", 5),
    submitFeedback
);
usersRouter.get("/api/user/feedback", isAuthenticated, getMyFeedbacks);

usersRouter.get("/api/user", isAuthenticated, viewUserData);
usersRouter.post("/api/user/read-announcements", isAuthenticated, markAnnouncementsAsReadController);

module.exports = usersRouter;
