import nodemailer from "nodemailer";
import { mailerConfig } from "../config/mailer.config.mjs";

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendVerificationEmail = async (email, token) => {
    const url = `http://localhost:3000/api/auth/verify?token=${token}`;
    await transporter.sendMail({
        from: '"MyApp" <no-reply@myapp.com>',
        to: email,
        subject: "Verify your email",
        html: `<p>Click <a href="${url}">here</a> to verify.</p>`,
    });
};
