const { Router } = require('express');
const authRouter = require('./auth.cjs');
const usersRouter = require('./users.cjs');
const compeRouter = require('./competition.cjs');

const router = Router();

router.use(authRouter);
router.use(compeRouter);
//router.use(usersRouter);

router.get("/", (req, res) => {
    res.status(200).send("OK");
});

module.exports = router;
