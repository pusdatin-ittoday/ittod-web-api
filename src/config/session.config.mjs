import PrismaSessionStore from "./PrismaSessionStore.mjs";

export default {
    secret: process.env.SECRET_KEY_SESSION,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(),
    cookie: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "lax",
    },
};