import { Router } from "express";
import authRouter from "./auth.mjs";
import usersRouter from "./users.mjs";
import compeRouter from "./competition.mjs";
import fileRouter from "./file.mjs";

const router = Router();

router.use(authRouter);
router.use(compeRouter);
router.use(fileRouter);
//router.use(usersRouter);

router.get("/", (req, res) => {
    res.status(200).send("OK");
});

export default router;
