import prisma from "../prisma.mjs";
import argon2 from "argon2";
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/mailer.mjs";

export const register = async ({ email, password, full_name }) => {
    if (password.length < 8)
        throw {
            status: 400,
            message: "Password must be at least 8 characters",
        };

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw { status: 409, message: "Email already used" };

    const provider = "basic";
    const hashed = await argon2.hash(password);
    const token = crypto.randomBytes(32).toString("hex");
    const generatedId = crypto.randomUUID();

    await prisma.user.create({
        data: {
            id: generatedId,
            email,
            full_name,
            identity: {
                create: {
                    id: generatedId,
                    provider,
                    email,
                    hash: hashed,
                    verification_token: token,
                    verification_token_expiration: new Date(
                        Date.now() + 60 * 5 * 1000
                    ),
                },
            },
        },
    });

    // Fire and forget (or send to a queue)
    sendVerificationEmail(email, token, full_name).catch(err =>
        console.error("Failed to send verification email (not critical):", err)
    );

    return { message: "Registered. Please verify your email." };
};

export const verifyEmail = async token => {
    const user = await prisma.user_identity.findFirst({
        where: {
            verification_token: token,
            verification_token_expiration: { gt: new Date() },
        },
    });

    if (!user) throw { status: 400, message: "Invalid or expired token" };

    await prisma.user.update({
        where: { id: user.id },
        data: {
            identity: {
                update: {
                    is_verified: true,
                    verification_token: "BASIC_VERIFIED",
                    verification_token_expiration: new Date(
                        Date.now() + 100 * 365 * 24 * 60 * 60 * 1000
                    ),
                },
            },
        },
    });

    return { message: "Email verified. You can now login." };
};
