import * as authService from "../services/auth.service.mjs";

export const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

export const verifyEmail = async (req, res) => {
    try {
        const result = await authService.verifyEmail(req.query.token);
        res.json({ message: result.message });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

export const login = (req, res) => {
    res.json({ message: "Login successful", user: req.user });
};
