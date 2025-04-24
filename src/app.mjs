import express, { json } from "express";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import "@dotenvx/dotenvx/config";

import routes from "./routes/index.mjs";
import sessionConfig from "./config/session.config.mjs";

const app = express();

//middlewares
app.use(json());
app.use(cookieParser(process.env.SECRET_KEY_SESSION));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

export default app;
