// src/middleware/passportAuthMiddleware.js
const passport = require("passport");

const passportAuthMiddleware = strategy => (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {
        if (err) {
            console.error("Authentication error:", err);
            return res.status(500).json({ message: "Internal server error" });
        }
        if (!user) {
            return res
                .status(401)
                .json({ message: info?.message || "Unauthorized" });
        }
        req.logIn(user, err => {
            if (err) {
                console.error("Login error:", err);
                return res.status(500).json({ message: "Login failed" });
            }
            next();
        });
    })(req, res, next);
};

module.exports = passportAuthMiddleware;
