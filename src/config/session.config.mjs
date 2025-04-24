import dotenv from "dotenv";

dotenv.config();

// Validate required environment variables
if (!process.env.SECRET_KEY_SESSION) {
    throw new Error("SECRET_KEY_SESSION environment variable is required");
}

export default {
    secret: process.env.SECRET_KEY_SESSION, // Use environment variable for the secret key
    resave: false, // Avoid resaving session if it hasn't been modified
    saveUninitialized: false, // Don't save uninitialized sessions
    // For production, add a persistent store:
    // store: new RedisStore({ client: redisClient }) or other production-ready store
    cookie: {
        secure: process.env.NODE_ENV === "production", // Secure in production, allow HTTP in development
        httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        maxAge: 1000 * 60 * 60 * 24, // Session expiration time (e.g., 1 day)
        sameSite: "lax", // Provides CSRF protection while allowing normal navigation
    },
};
