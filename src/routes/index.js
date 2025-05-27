const { Router } = require("express");
const authRouter = require("./auth");
const compeRouter = require("./competition.js");
const timelineRouter = require("./timeline");
const uploadRouter = require("./images");
const usersRouter = require("./user");
const adminRouter = require("./admin");
const announcementRouter = require("./announcement.js");
const competitionDataRouter = require("./competition-data.js");
const fetchHalamanKompetisiEventRouter = require("./fetch-halaman-kompetisi-event.js");
const eventRouter = require("./event")

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("OK");
});
router.use(authRouter);
router.use(compeRouter);
router.use(timelineRouter);
router.use(uploadRouter);
router.use(usersRouter);
router.use(adminRouter);
router.use(competitionDataRouter);
router.use(fetchHalamanKompetisiEventRouter);
router.use(announcementRouter);
router.use(eventRouter);


module.exports = router;
