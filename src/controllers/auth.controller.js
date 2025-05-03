import * as authService from "../services/auth.service.mjs";

exports.register = = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.verifyEmail = = async (req, res) => {
    try {
        const result = await authService.verifyEmail(req.query.token);
        res.json({ message: result.message });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.login = = (req, res) => {
    const { id, email, name } = req.user;
    res.json({
        message: "Login successful",
        user: { id, email, name },
    });
};
