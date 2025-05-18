const { Router } = require("express");
const authRouter = require("./auth");
const compeRouter = require("./competition.js");
const fileRouter = require("./file");
const timelineRouter = require("./timeline");
const uploadRouter = require("./images");
const usersRouter = require("./user");
const adminRouter = require("./admin");
<<<<<<< HEAD
const fetchHalamanKompetisiEventRouter = require("./fetch-halaman-kompetisi-event.js");
=======
const announcementRouter = require("./announcement.js");
>>>>>>> 89b99ec52ab117d9615cdc6df7159cf9a6af59db

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
<<<<<<< HEAD
router.use(fetchHalamanKompetisiEventRouter);
=======
router.use(announcementRouter);
>>>>>>> 89b99ec52ab117d9615cdc6df7159cf9a6af59db

module.exports = router;
