// noinspection DuplicatedCode

const prisma = require("../prisma.js");
const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const argon2 = require("argon2");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        // Get user_identity (contains auth info)
        const identity = await prisma.user_identity.findUnique({ 
            where: { id },
            include: { user: true }
        });
        if (!identity) {
            return done(null, false);
        }
        // Combine identity + user data
        const user = {
            id: identity.id,
            email: identity.email,
            role: identity.role,
            is_verified: identity.is_verified,
            full_name: identity.user?.full_name,
            name: identity.user?.full_name, // For auth.controller
            phone_number: identity.user?.phone_number,
        };
        done(null, user);
    } catch (err) {
        console.error("Deserialization error:", err);
        done(err, null);
    }
});

passport.use(
    "basic-user",
    new LocalStrategy(
        { usernameField: "email" },
        async (email, password, done) => {
            try {
                const identity = await prisma.user_identity.findUnique({
                    where: { email },
                    include: { user: true },
                });

                // Check user existence and hash existence
                if (!identity || !identity.hash) {
                    return done(null, false, {
                        message: "Invalid email or password",
                    });
                }

                // Check verification status (Integer 1 means verified)
                if (identity.is_verified !== 1) {
                    return done(null, false, {
                        message: "Please verify your email before logging in",
                    });
                }

                // Verify password using Argon2
                const valid = await argon2.verify(identity.hash, password);
                if (!valid) {
                    return done(null, false, {
                        message: "Invalid email or password",
                    });
                }

                // Combine identity + user data to make sure it matches deserializeUser
                const user = {
                    id: identity.id,
                    email: identity.email,
                    role: identity.role,
                    is_verified: identity.is_verified,
                    full_name: identity.user?.full_name,
                    name: identity.user?.full_name, // For auth.controller
                    phone_number: identity.user?.phone_number,
                };

                return done(null, user);
            } catch (err) {
                console.error("Authentication error:", err);
                return done(err);
            }
        }
    )
);

module.exports = passport;
