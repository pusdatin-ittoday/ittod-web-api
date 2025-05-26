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
        secure: true,
        sameSite: "None",
        domain: process.env.COOKIE_DOMAIN,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24,
    },
};
