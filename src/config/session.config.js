const PrismaSessionStore = require("./PrismaSessionStore.js");

const sessionSecret = process.env.SECRET_KEY_SESSION;
if (!sessionSecret) {
    throw new Error("Missing SECRET_KEY_SESSION environment variable");
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    name: "session",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(),
    cookie: {
        httpOnly: true,
        sameSite: "Lax",
        secure: isProduction,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
};
