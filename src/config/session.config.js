const PrismaSessionStore = require("./PrismaSessionStore.js");

const sessionSecret = process.env.SECRET_KEY_SESSION;
if (!sessionSecret) {
    throw new Error("Missing SECRET_KEY_SESSION environment variable");
}

module.exports = {
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(),
    cookie: {
        domain: process.env.COOKIE_DOMAIN || ".ittoday.web.id",
        secure: process.env.NODE_ENV === "production" || false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "Strict",
    },
};
