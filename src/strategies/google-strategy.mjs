import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import "@dotenvx/dotenvx/config";
import prisma from "../prisma.mjs";

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
    try {
        const [user] = await prisma.$queryRaw`
            SELECT * FROM user WHERE id = ${id} LIMIT 1
        `;
        if (!user) throw new Error("User not found");
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

export default passport.use(
    new Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_REDIRECT,
        },
        async (accessToken, refreshToken, profile, done) => {
            const externalId = profile.id;
            const email = profile.emails?.[0]?.value;
            const fullName = profile.displayName ?? null;
            const provider = "google";

            if (!email) return done(new Error("Email is required."), null);

            try {
                const [identity] = await prisma.$queryRaw`
                    SELECT * FROM user_identity WHERE id = ${externalId} LIMIT 1
                `;

                if (identity) {
                    const [user] = await prisma.$queryRaw`
                        SELECT * FROM user WHERE id = ${identity.id} LIMIT 1
                    `;
                    return done(null, user);
                }

                // Create user
                await prisma.$executeRaw`
                    INSERT INTO user (id, email, full_name)
                    VALUES (${externalId}, ${email}, ${fullName})
                `;

                // Create identity
                await prisma.$executeRaw`
                    INSERT INTO user_identity (id, email, provider, hash)
                    VALUES (${externalId}, ${email}, ${provider}, NULL)
                `;

                const [newUser] = await prisma.$queryRaw`
                    SELECT * FROM user WHERE id = ${externalId} LIMIT 1
                `;
                return done(null, newUser);
            } catch (err) {
                console.error("OAuth error:", err);
                return done(err, null);
            }
        }
    )
);
