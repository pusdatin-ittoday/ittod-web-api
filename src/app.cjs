const express = require('express');
const { json } = require('express');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
require('@dotenvx/dotenvx/config');

const routes = require('./routes/index.cjs');
const sessionConfig = require('./config/session.config.cjs');

const app = express();

//middlewares
app.use(json());
app.use(cookieParser(process.env.SECRET_KEY_SESSION));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

module.exports = app;
