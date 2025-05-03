const prisma = require('../prisma.js');
const passport = require('passport');
const { Strategy as GoogleStrategy } = require('passport-google-oauth20');

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

module.exports = passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_REDIRECT,
        },
        async (accessToken, refreshToken, profile, done) => {
            const externalId = profile.id;
            const email = profile.emails?.[0]?.value ?? null;
            const fullName = profile.displayName ?? null;
            const provider = "google";

            if (!email) return done(new Error("Email is required."), null);

            try {
                const identity = await prisma.user_identity.findUnique({
                    where: {
                        id: externalId,
                        provider: provider,
                    },
                    include: { user: true },
                });
                if (identity) {
                    return done(null, identity.user);
                }

                const existingUser = await prisma.user.findUnique({
                    where: { email },
                });

                if (existingUser) {
                    await prisma.user_identity.create({
                        data: {
                            id: externalId,
                            provider,
                            email,
                            hash: null,
                            verification_token: "OAUTH_USER",
                            verification_token_expiration: new Date(
                                Date.now() + 100 * 365 * 24 * 60 * 60 * 1000
                            ),
                        },
                    });

                    return done(null, existingUser);
                }
                const user = await prisma.user.create({
                    data: {
                        id: externalId,
                        email,
                        full_name: fullName,
                        identity: {
                            create: {
                                provider,
                                email,
                                hash: null,
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
