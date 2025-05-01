// noinspection ES6UnusedImports

import { Router } from "express";
import passport from "passport";
import { validateLogin, loginLimiter } from "../middleware/authMiddleware.mjs";
import { validateRegister } from "../middleware/registerValidationMiddleware.mjs";
import preventLoginIfAuthenticated from "../middleware/preventLoginIfAuthenticated.mjs";
import googleStrategy from "../strategies/google-strategy.mjs";
import LocalStrategy from "../strategies/local-strategy.mjs";
import {
    login,
    register,
    verifyEmail,
} from "../controllers/auth.controller.mjs";

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

export default authRouter;
