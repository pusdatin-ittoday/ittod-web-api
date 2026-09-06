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
const defaultOrigins = [
    "https://ittoday.web.id",
    "https://admin.ittoday.web.id",
    "http://localhost:5173",
    "http://localhost:5174",
];

const envOrigins = [
    process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(",") : [],
    process.env.FRONTEND_URL,
    process.env.APP_FRONTEND_URL,
]
    .flat()
    .filter(Boolean)
    .map((o) => o.trim());

const allowedOrigins = Array.from(new Set([...defaultOrigins, ...envOrigins]));

//middlewares
app.use(
    cors({
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);
            if (
                allowedOrigins.includes(origin) ||
                /^https:\/\/([a-z0-9-]+\.)*ittoday\.web\.id$/.test(origin) ||
                origin.startsWith("http://localhost:")
            ) {
                return callback(null, true);
            }
            return callback(null, false);
        },
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
