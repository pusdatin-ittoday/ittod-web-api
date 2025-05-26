const authService = require("../services/auth.service.js");
const emailTemplates = require("../templates/emailVerification");
const { validateFrontendUrl } = require("../utils/urlValidator");

exports.register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.verifyEmail = async (req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        await authService.verifyEmail(token);
        // If verification succeeds, show success message and redirect
        try {
            const frontendBaseUrl = validateFrontendUrl(process.env.APP_FRONTEND_URL);
            res.send(emailTemplates.successTemplate(frontendBaseUrl));
        } catch (urlError) {
            console.error('Frontend URL validation failed:', urlError.message);
            // Fallback to localhost if URL validation fails
            res.send(emailTemplates.successTemplate(process.env.APP_FRONTEND_URL));
        }
    } catch (err) {
        // If verification fails, show error message without redirect
        const safeMessage = String(err.message).replace(/</g, '&lt;').replace(/>/g, '&gt;');
        res.status(400).send(emailTemplates.errorTemplate(safeMessage));
    }
};

exports.resendVerificationEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email || !email.trim()) {
            return res.status(400).json({ error: "Email is required" });
        }
        const result = await authService.resendVerificationEmail(email);
        res.json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.login = (req, res) => {
    const { id, email, name, role } = req.user;
    res.json({
        message: "Login successful",
        user: { id, email, name, role },
    });
};

exports.loginAdmin = (req, res) => {
    const { id, email, name, role } = req.user;
    res.json({
        message: "Admin login successful",
        user: { id, email, name, role },
    });
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email || !email.trim()) {
            return res.status(400).json({ error: "Email is required" });
        }
        await authService.sendPasswordResetEmail(email);
        res.json({ message: "Password reset instructions have been sent to your email" });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !token.trim()) {
            return res.status(400).json({ error: "Token is required" });
        }
        if (!newPassword) {
            return res.status(400).json({ error: "New password is required" });
        }
        await authService.resetPassword(token, newPassword);
        res.json({ message: "Password has been reset successfully" });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};