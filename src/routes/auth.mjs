// noinspection JSCheckFunctionSignatures

import { Router } from "express";
import passport from "passport";

const authRouter = Router();

authRouter.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
    "/auth/google/redirect",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        // Successful authentication
        res.redirect("/");
    }
);

authRouter.get("/logout", (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).send("Error logging out.");
        }
        res.redirect("/");
    });
});

export default authRouter;
