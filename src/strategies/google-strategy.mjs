import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import "@dotenvx/dotenvx/config";
import prisma from "../prisma.mjs";

export default passport.use(
    new Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/api/auth/google/redirect",
            passReqToCallback: true,
        },
        async (accessToken, refreshToken, profile, done) => {
            let findUser;
            try {
                findUser = await prisma.user_identity.findUnique({
                    where: { external_id: profile.id },
                });
            } catch (e) {
                return done(e, null);
            }

            try {
                if (!findUser) {
                    const email =
                        profile.emails && profile.emails[0]
                            ? profile.emails[0].value
                            : null;
                    if (!email) {
                        return done(
                            new Error(
                                "Email is required but not provided by Google."
                            ),
                            null
                        );
                    }

                    const username = profile.id;
                    const provider = "google";

                    await prisma.user.upsert({
                        where: { username },
                        update: {},
                        create: {
                            username,
                            email,
                        },
                    });

                    const newUser = await prisma.user_identity.create({
                        data: {
                            username,
                            external_id: profile.id,
                            email,
                            provider,
                        },
                    });
                    return done(null, newUser);
                }
                return done(null, findUser);
            } catch (e) {
                console.log(e);
                return done(e, null);
            }
        }
    )
);
