const nodemailer = require("nodemailer");
const { mailerConfig } = require("../config/mailer.config.js");

const transporter = nodemailer.createTransport(mailerConfig);

exports.sendVerificationEmail = async (email, token, name) => {
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
                    <p>If the button doesn't work, copy and paste this link in your browser:</p>
                    <p><a href="${url}">${url}</a></p>
                    <p>This link will expire in 24 hours. If you didn't request this, you can safely ignore this email.</p>
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

exports.sendPasswordResetEmail = async (email, token, name) => {
    // For testing: Log the reset token instead of sending email
    /*
    console.log('\n=== PASSWORD RESET TOKEN (FOR TESTING) ===');
    console.log('Email:', email);
    console.log('Reset Token:', token);
    console.log('\nTo reset password, send a POST request to:');
    console.log('URL: http://localhost:3000/api/auth/reset-password');
    console.log('Headers: Content-Type: application/json');
    console.log('Body:');
    console.log('{');
    console.log('    "token": "' + token + '",');
    console.log('    "newPassword": "your-new-password"');
    console.log('}');
    console.log('=========================================\n');
    */
    
    const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";
    const supportEmail = process.env.SUPPORT_EMAIL || "support@ittoday.com";
    const frontendUrl = process.env.APP_FRONTEND_URL || "http://localhost:5173";
    const url = `${frontendUrl}/new-password?token=${token}`;
    const sender = process.env.EMAIL_SENDER || '"IT Today" <no-reply@ittoday.com>';

    try {
        const result = await transporter.sendMail({
            from: sender,
            replyTo: supportEmail,
            to: email,
            subject: `Reset Your IT Today Password`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height:1.5;">
                    <h2>Password Reset Request</h2>
                    <p>Hi ${name || ""},</p>
                    <p>We received a request to reset your password. Click the button below to create a new password:</p>
                    <div style="text-align:center; margin:20px 0;">
                        <a href="${url}"
                           style="display:inline-block; background:#4CAF50; color:#fff; padding:12px 24px; text-decoration:none; border-radius:4px;">
                           Reset Password
                        </a>
                    </div>
                    <p>If the button doesn't work, copy and paste this link in your browser:</p>
                    <p><a href="${url}">${url}</a></p>
                    <p>This link will expire in 1 hour. If you didn't request this password reset, you can safely ignore this email.</p>
                    <p>Need help? Reply to this email or contact <a href="mailto:${supportEmail}">support</a>.</p>
                </div>
            `,
        });
        console.log(`Password reset email sent to ${email}: ${result.messageId}`);
    } catch (error) {
        console.error("Failed to send password reset email:", error);
        throw new Error("Failed to send password reset email");
    }
};
