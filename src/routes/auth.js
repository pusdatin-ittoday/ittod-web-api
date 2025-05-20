// noinspection ES6UnusedImports

const { Router } = require("express");
const passport = require("passport");
const {
    validateLogin,
    loginLimiter,
} = require("../middleware/authMiddleware.js");
const {
    validateRegister,
} = require("../middleware/registerValidationMiddleware.js");
const preventLoginIfAuthenticated = require("../middleware/preventLoginIfAuthenticated.js");
const googleStrategy = require("../strategies/google-strategy.js");
const LocalStrategy = require("../strategies/local-strategy.js");
const {
    login,
    register,
    verifyEmail,
} = require("../controllers/auth.controller.js");
const passportAuthMiddleware = require("../middleware/passportAuthMiddleware");
const authRouter = Router();

authRouter.post(
    "/api/auth/login",
    loginLimiter,
    preventLoginIfAuthenticated,
    validateLogin,
    passportAuthMiddleware("local"),
    login
);

authRouter.post("/api/auth/register", validateRegister, register);

authRouter.get("/api/auth/verify", verifyEmail);

authRouter.get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
    "/api/auth/google/redirect",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect(process.env.APP_BASE_URL + "/dashboard");
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
