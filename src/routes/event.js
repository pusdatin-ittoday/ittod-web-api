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
module.exports = eventRouter;
