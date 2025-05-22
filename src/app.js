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
const corsOptions = {
    origin: "*", // Adjust this to your needs
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
};
//middlewares
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser(process.env.SECRET_KEY_SESSION));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

module.exports = app;
