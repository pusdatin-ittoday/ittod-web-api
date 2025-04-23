import dotenv from "dotenv";
dotenv.config();

export default {
    secret: process.env.SECRET_KEY_SESSION, // Use environment variable for the secret key
    resave: false, // Avoid resaving session if it hasn't been modified
    saveUninitialized: false, // Don't save uninitialized sessions
    cookie: {
        secure: process.env.NODE_ENV === "production", // Secure in production, allow HTTP in development
        httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        maxAge: 1000 * 60 * 60 * 24, // Session expiration time (e.g., 1 day)
        sameSite: 'lax', // Provides CSRF protection while allowing normal navigation
    },
};
