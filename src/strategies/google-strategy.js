const prisma = require("../prisma.js");
const passport = require("passport");
const crypto = require("crypto");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { checkAdmin } = require("../middleware/adminOnlyMiddleware");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const identity = await prisma.user_identity.findUnique({ 
            where: { id },
            include: { user: true }
        });
        if (identity) {
            const user = {
                id: identity.id,
                email: identity.email,
                role: identity.role,
                is_verified: identity.is_verified,
                full_name: identity.user?.full_name || "",
                name: identity.user?.full_name || "",
                phone_number: identity.user?.phone_number || "",
                ...(identity.user || {}),
            };
            return done(null, user);
        }

        const user = await prisma.user.findUnique({ 
            where: { id },
            include: { identity: true }
        });
        if (user) {
            return done(null, {
                ...user,
                name: user.full_name,
                role: user.identity?.role || "user",
                is_verified: user.identity?.is_verified ?? 1,
            });
        }

        done(null, false);
    } catch (err) {
        console.error("Deserialization error:", err);
        done(err, null);
    }
});

module.exports = passport.use(
    "google-user",
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_REDIRECT,
        },
        async (accessToken, refreshToken, profile, done) => {
            const email = profile.emails?.[0]?.value ?? null;
            const fullName = profile.displayName ?? null;
            const provider = "google";

            if (!email) return done(new Error("Email is required."), null);

            try {
                // Look up existing identity by email + provider
                const identity = await prisma.user_identity.findFirst({
                    where: { email, provider },
                    include: { user: true },
                });
                if (identity) {
                    return done(null, identity.user);
                }

                const existingUser = await prisma.user.findUnique({
                    where: { email },
                    include: { identity: true },
                });

                if (existingUser) {
                    // User exists but registered with a different provider
                    if (existingUser.identity && existingUser.identity.provider !== "google") {
                        return done(null, false, {
                            message: "Email ini sudah terdaftar. Silakan login menggunakan email & password."
                        });
                    }
                    return done(null, existingUser);
                }

                // New user — generate a proper UUID
                const newId = crypto.randomUUID();
                const user = await prisma.user.create({
                    data: {
                        id: newId,
                        email,
                        full_name: fullName,
                        identity: {
                            create: {
                                provider,
                                email,
                                hash: null,
                                is_verified: 1,
                                role: "user",
                                verification_token: "OAUTH_USER",
                                verification_token_expiration: new Date(
                                    Date.now() + 100 * 365 * 24 * 60 * 60 * 1000
                                ),
                            },
                        },
                    },
                });

                return done(null, user);
            } catch (err) {
                console.error("OAuth error:", err);
                return done(err, null);
            }
        }
    )
);

module.exports = passport;
