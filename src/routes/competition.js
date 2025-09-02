const { Router } = require("express");
const {
    joinCompetitionWithTeamCode,
    registerCompetition,
} = require("../controllers/competition.controller.js");
const {
    uploadPaymentController,
} = require("../controllers/pay-competition.controller");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const multer = require("multer");
const { validateFile } = require("../middleware/imageValidator");
const {
    upsertSubmissionController,
} = require("../controllers/submission.controller");

const images = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB limit
    },
}); // Use memory storage for Buffer
const compeRouter = Router();

/*
compeRouter.post(
    "/api/competition/register",
    isAuthenticated,
    registerCompetition
);
*/

compeRouter.post(
    "/api/competition/join",
    isAuthenticated,
    joinCompetitionWithTeamCode
);

compeRouter.post(
    "/api/competition/payment",
    isAuthenticated,
    images.single("image"),
    validateFile,
    uploadPaymentController
);

compeRouter.put(
    "/api/competition/submission",
    isAuthenticated,
    upsertSubmissionController
);

module.exports = compeRouter;
