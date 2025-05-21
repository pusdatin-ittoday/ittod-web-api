const prisma = require("../prisma.js");
const argon2 = require("argon2");
const crypto = require("crypto");
const { sendVerificationEmail, sendPasswordResetEmail } = require("../utils/mailer.js");

exports.register = async ({ email, password, full_name }) => {
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
                    provider,
                    email,
                    hash: hashed,
                    verification_token: token,
                    verification_token_expiration: new Date(
                        Date.now() + 60 * 5 * 1000
                    ),
                    role: "user",
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

exports.verifyEmail = async token => {
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

exports.sendPasswordResetEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: { email },
        include: { identity: true }
    });

    if (!user) {
        throw { status: 404, message: "User not found" };
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiration = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await prisma.user_identity.update({
        where: { id: user.identity.id },
        data: {
            password_recovery_token: resetToken,
            password_recovery_token_expiration: resetTokenExpiration
        }
    });

    // Send reset email with error handling
    try {
        await sendPasswordResetEmail(email, resetToken, user.full_name);
    } catch (err) {
        console.error("Failed to send password reset email: ", err);
        // Continue execution, as the token was still successfully generated
    }
};

exports.resetPassword = async (token, newPassword) => {
    if (newPassword.length < 8) {
        throw { status: 400, message: "Password must be at least 8 characters" };
    }

    const user = await prisma.user_identity.findFirst({
        where: {
            password_recovery_token: token,
            password_recovery_token_expiration: { gt: new Date() }
        }
    });

    if (!user) {
        throw { status: 400, message: "Invalid or expired reset token" };
    }

    const hashedPassword = await argon2.hash(newPassword);

    await prisma.user_identity.update({
        where: { id: user.id },
        data: {
            hash: hashedPassword,
            password_recovery_token: null,
            password_recovery_token_expiration: null
        }
    });
};
