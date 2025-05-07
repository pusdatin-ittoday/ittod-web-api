const { Router } = require("express");
const authRouter = require("./auth.js");
const compeRouter = require("./competition.js");
const fileRouter = require("./file");
const timelineRouter = require("./timeline");

const router = Router();

router.use(authRouter);
router.use(compeRouter);
router.use(fileRouter);
router.use(timelineRouter);

router.get("/", (req, res) => {
    res.status(200).send("OK");
});

module.exports = router;
