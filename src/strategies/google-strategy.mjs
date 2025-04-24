import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import "@dotenvx/dotenvx/config";
import prisma from "../prisma.mjs";
import { v4 as uuidv4 } from "uuid";

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
                // Use Prisma's upsert to handle both create and update cases
                const user = await prisma.user.upsert({
                    where: { id: externalId },
                    update: {
                        email,
                        full_name: fullName,
                    },
                    create: {
                        id: externalId,
                        email,
                        full_name: fullName,
                    },
                });

                // Create or update identity with verification token
                const userIdentity = await prisma.user_identity.upsert({
                    where: {
                        id: externalId,
                    },
                    update: {
                        email,
                        provider: "google",
                    },
                    create: {
                        id: externalId,
                        email,
                        provider: "google",
                        hash: null,
                        verification_token: uuidv4(),
                        verification_token_expiration: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
                        user: {
                            connect: {
                                id: externalId
                            }
                        }
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
