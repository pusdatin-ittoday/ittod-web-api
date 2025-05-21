const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const {
    eventJoinController,
    eventShowController,
} = require("../controllers/event-user.controller");
const eventRegisterSchema = require("../validators/eventRegisterValidationSchema");
const { validateRequest } = require("../middleware/joiMiddleware");
const eventRouter = Router();

eventRouter.post(
    "/api/event/join",
    isAuthenticated,
    validateRequest(eventRegisterSchema),
    eventJoinController
);

eventRouter.get("/api/event/", isAuthenticated, eventShowController);
module.exports = eventRouter;
