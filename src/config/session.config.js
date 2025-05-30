const PrismaSessionStore = require("./PrismaSessionStore.js");

const sessionSecret = process.env.SECRET_KEY_SESSION;
if (!sessionSecret) {
    throw new Error("Missing SECRET_KEY_SESSION environment variable");
}

module.exports = {
    name: "session",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(),
    cookie: {
        httpOnly: true,
        sameSite: "Strict",
        maxAge: 3600000 * 24 * 24 * 24
    },
};
