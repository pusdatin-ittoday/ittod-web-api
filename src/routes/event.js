const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { eventJoinController } = require("../controllers/event-user.controller");
const loginSchema = require("../validators/eventRegisterValidationSchema");
const { validateRequest } = require("../middleware/joiMiddleware");
const eventRouter = Router();

eventRouter.post(
    "/api/event/join",
    isAuthenticated,
    validateRequest(loginSchema),
    eventJoinController
);

eventRouter.get("/api/event/", isAuthenticated, )
module.exports = eventRouter;