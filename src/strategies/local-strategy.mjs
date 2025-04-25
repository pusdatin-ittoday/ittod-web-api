// noinspection DuplicatedCode

import prisma from "../prisma.mjs";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import * as argon2 from "argon2";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
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
                const user = await prisma.user.findUnique({
                    where: { email },
                });
                if (!user || !user.is_verified) return done(null, false);
                const valid = await argon2.verify(user.password, password);
                if (!valid) return done(null, false);
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    )
);

export default passport;