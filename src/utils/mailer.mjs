import nodemailer from "nodemailer";
import { mailerConfig } from "../config/mailer.config.mjs";

const transporter = nodemailer.createTransport(mailerConfig);

export const sendVerificationEmail = async (email, token, name) => {
    const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";
    const supportEmail = process.env.SUPPORT_EMAIL || "support@ittoday.com";
    const url = `${baseUrl}/api/auth/verify?token=${token}`;
    const sender =
        process.env.EMAIL_SENDER || '"IT Today" <no-reply@ittoday.com>';

    try {
        const result = await transporter.sendMail({
            from: sender,
            replyTo: supportEmail,
            to: email,
            subject: `Please verify your email for IT Today`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height:1.5;">
                    <h2>Email Verification</h2>
                    <p>Hi ${name || ""},</p>
                    <p>Thank you for joining IT Today! To secure your account, please verify your email by clicking the button below:</p>
                    <div style="text-align:center; margin:20px 0;">
                        <a href="${url}"
                           style="display:inline-block; background:#4CAF50; color:#fff; padding:12px 24px; text-decoration:none; border-radius:4px;">
                           Verify Email
                        </a>
                    </div>
                    <p>If the button doesn’t work, copy and paste this link in your browser:</p>
                    <p><a href="${url}">${url}</a></p>
                    <p>This link will expire in 24 hours. If you didn’t request this, you can safely ignore this email.</p>
                    <p>Need help? Reply to this email or contact <a href="mailto:${supportEmail}">support</a>.</p>
                </div>
            `,
        });
        console.log(`Verification email sent to ${email}: ${result.messageId}`);
    } catch (error) {
        console.error("Failed to send verification email:", error);
        throw new Error("Failed to send verification email");
    }
};
