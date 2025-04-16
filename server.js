require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const credentialsPath = path.join(__dirname, "config", "client_secret.json");
const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf-8"));

const app = express();

// Session setup
app.use(session({ secret: process.env.SESSION_SECRET || "default-secret", resave: false, saveUninitialized: true }));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Passport Serialization


// Configure Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: credentials.web.client_id,
      clientSecret: credentials.web.client_secret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Routes
app.get("/", (req, res) => res.send('<a href="/auth/google">Login with Google</a>'));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.send(`<h1>Welcome ${req.user.displayName}</h1><a href="/logout">Logout</a>`);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
