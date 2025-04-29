import nodemailer from "nodemailer";
import { mailerConfig } from "../config/mailer.config.mjs";

const transporter = nodemailer.createTransport(mailerConfig);

export const sendVerificationEmail = async (email, token) => {
    const url = `http://localhost:3000/api/auth/verify?token=${token}`;
    try {
        await transporter.sendMail({
            from: '"MyApp" <no-reply@myapp.com>',
            to: email,
            subject: "Verify your email",
            html: `<p>Click <a href="${url}">here</a> to verify.</p>`,
        });
    } catch (error) {
        console.error("Failed to send verification email:", error);
        throw new Error("Failed to send verification email");
    }
};
