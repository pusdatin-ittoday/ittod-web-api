import Joi from "joi";
import loginSchema from "../validators/loginValidationSchema.mjs";
import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    keyGenerator: req => req.body.email || req.ip,
    handler: (req, res) =>
        res
            .status(429)
            .json({ message: "Too many login attempts. Try again later." }),
    standardHeaders: true,
    legacyHeaders: false,
});

const validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ errors: error.details.map(err => err.message) });
    }
    next();
};

export { validateLogin, loginLimiter };
