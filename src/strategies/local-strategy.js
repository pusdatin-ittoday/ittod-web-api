// noinspection DuplicatedCode

const prisma = require('../prisma.js');
const passport = require('passport');
const { Strategy as LocalStrategy } = require('passport-local');
import * as argon2 from "argon2";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    } catch (err) {
        console.error("Deserialization error:", err);
        done(err, null);
    }
});

passport.use(
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
                const valid = await argon2.verify(user.hash, password);
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
