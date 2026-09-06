const express = require("express");
const { json } = require("express");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("@dotenvx/dotenvx/config");

const routes = require("./routes/index.js");
const sessionConfig = require("./config/session.config.js");

const app = express();
//middlewares
app.use(
    cors({
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        origin: ["https://ittoday.web.id", "http://localhost:5173", "http://localhost:5174"],
        credentials: true,
    })
);
app.use(json());
app.use(cookieParser(process.env.SECRET_KEY_SESSION));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
    });
    next();
});
app.use(routes);

module.exports = app;
