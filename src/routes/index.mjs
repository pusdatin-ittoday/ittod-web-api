import { Router } from "express";
import authRouter from "./auth.mjs";
import usersRouter from "./users.mjs";
const router = Router();

router.use(authRouter);
router.use(usersRouter);

export default router;
