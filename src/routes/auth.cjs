// noinspection ES6UnusedImports

const { Router } = require('express');
const passport = require('passport');
const { validateLogin, loginLimiter } = require('../middleware/authMiddleware.cjs');
const { validateRegister } = require('../middleware/registerValidationMiddleware.cjs');
const preventLoginIfAuthenticated = require('../middleware/preventLoginIfAuthenticated.cjs');
const googleStrategy = require('../strategies/google-strategy.cjs');
const LocalStrategy = require('../strategies/local-strategy.cjs');
const { login,
    register,
    verifyEmail, } = require('../controllers/auth.controller.cjs');

const authRouter = Router();

authRouter.post("/api/auth/register", validateRegister, register);
authRouter.post(
    "/api/auth/login",
    loginLimiter,
    preventLoginIfAuthenticated,
    validateLogin,
    passport.authenticate("local"),
    (req, res, next) => {
        login(req, res, next);
    }
);

authRouter.get("/api/auth/verify", verifyEmail);

authRouter.get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
    "/api/auth/google/redirect",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/");
    }
);

authRouter.get("/api/auth/logout", (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).send("Error logging out.");
        }
        res.redirect("/");
    });
});

authRouter.get("/api/auth/status", (req, res) => {
    if (req.isAuthenticated()) {
        // res.status(200).json({ authenticated: true, user: req.user });
        // sanitize first
        const { id, email, full_name } = req.user;
        res.status(200).json({
            authenticated: true,
            user: { id, email, full_name },
        });
    } else {
        res.status(200).json({ authenticated: false });
    }
});

module.exports = authRouter;
