// noinspection JSCheckFunctionSignatures

import { Router } from "express";
import passport from "passport";

const authRouter = Router();

// Google OAuth login route
authRouter.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
authRouter.get(
    "/auth/google/redirect",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        // Successful authentication
        res.redirect("/");
    }
);

// Logout route
authRouter.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).send("Error logging out.");
        }
        res.redirect("/");
    });
});

export default authRouter;