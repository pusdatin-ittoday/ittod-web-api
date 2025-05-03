// @deprecated

const { Router } = require("express");
const { changeUsername } = require("../services/user.service.js");
const { validateChangeUsername } = require("../middleware/userMiddleware.js");

const usersRouter = Router();

usersRouter.post(
    "/api/user/change-username",
    validateChangeUsername,
    async (req, res) => {
        const { oldUsername, newUsername } = req.body;
        const result = await changeUsername(oldUsername, newUsername);
        res.status(result.success ? 200 : 400).json(result);
    }
);

module.exports = usersRouter;
