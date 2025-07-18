const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const {
    eventJoinController,
    eventShowController,
    bootcampRegistrationController,
} = require("../controllers/event-user.controller");
const eventRegisterSchema = require("../validators/eventRegisterValidationSchema");
const { validateRequest } = require("../middleware/joiMiddleware");
const bootcampRegisterSchema = require("../validators/bootcampRegistrationSchema");
const multer = require("multer");
const { validateFile } = require("../middleware/imageValidator");
const { uploadBootcampPaymentController } = require("../controllers/bootcamp-payment.controller");
const images = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB limit
    },
});

const eventRouter = Router();

eventRouter.post(
    "/api/event/join",
    isAuthenticated,
    validateRequest(eventRegisterSchema),
    eventJoinController
);

eventRouter.post(
    "/api/event/bootcamp/join",
    isAuthenticated,
    validateRequest(bootcampRegisterSchema),
    bootcampRegistrationController
);

eventRouter.get("/api/event/", isAuthenticated, eventShowController);

eventRouter.post(
    "/api/event/bootcamp/payment",
    isAuthenticated,
    images.single("image"),
    validateFile,
    uploadBootcampPaymentController
);
module.exports = eventRouter;
