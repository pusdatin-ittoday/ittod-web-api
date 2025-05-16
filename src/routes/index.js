const { Router } = require("express");
const authRouter = require("./auth");
const compeRouter = require("./competition.js");
const fileRouter = require("./file");
const timelineRouter = require("./timeline");
const uploadRouter = require("./images");
const usersRouter = require("./user");
const adminRouter = require("./admin");

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("OK");
});
router.use(authRouter);
router.use(compeRouter);
router.use(fileRouter);
router.use(timelineRouter);
router.use(uploadRouter);
router.use(usersRouter);
router.use(adminRouter);

module.exports = router;
