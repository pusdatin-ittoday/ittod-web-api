// noinspection ES6UnusedImports

import { Router } from "express";
import passport from "passport";
import { validateLogin } from "../middleware/authMiddleware.mjs";
import preventLoginIfAuthenticated from "../middleware/preventLoginIfAuthenticated.mjs";
import googleStrategy from "../strategies/google-strategy.mjs";

const authRouter = Router();

authRouter.post("/api/auth/login", preventLoginIfAuthenticated, validateLogin, (req, res) => {
  res.status(200).send("Login successful");
});

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

authRouter.get("/logout", (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).send("Error logging out.");
    }
    res.redirect("/");
  });
});

export default authRouter;