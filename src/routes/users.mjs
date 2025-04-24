import { Router } from "express";
import { changeUsername } from "../services/user.service.mjs";
import { validateChangeUsername } from "../middleware/userMiddleware.mjs";

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

export default usersRouter;
