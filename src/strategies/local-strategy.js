// noinspection DuplicatedCode

const prisma = require("../prisma.js");
const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcryptjs");

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
                const user = await prisma.user_identity.findUnique({
                    where: { email },
                });

                // Check user existence and hash existence
                if (!user || !user.hash) {
                    return done(null, false, {
                        message: "Invalid email or password",
                    });
                }

                // Check verification status
                if (!user.is_verified) {
                    return done(null, false, {
                        message: "Please verify your email before logging in",
                    });
                }

                // Verify password
                const valid = await bcrypt.compare(password, user.hash);
                if (!valid) {
                    return done(null, false, {
                        message: "Invalid email or password",
                    });
                }
                return done(null, user);
            } catch (err) {
                console.error("Authentication error:", err);
                return done(err);
            }
        }
    )
);

module.exports = passport;
