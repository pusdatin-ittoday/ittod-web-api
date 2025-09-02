const {
    forgotPasswordSchema,
    resetPasswordSchema,
} = require("../validators/passwordResetValidationSchema.js");
const rateLimit = require("express-rate-limit");

// Rate limiter for forgot password requests
const forgotPasswordLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 attempts per hour
    keyGenerator: req => req.body.email || req.ip,
    handler: (req, res) =>
        res.status(429).json({
            message:
                "Too many password reset attempts. Please try again later or contact support.",
        }),
    standardHeaders: true,
    legacyHeaders: false,
});

// Rate limiter for reset password attempts
const resetPasswordLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per 15 minutes
    keyGenerator: req => req.body.token || req.ip,
    handler: (req, res) =>
        res.status(429).json({
            message:
                "Too many password reset attempts. Please try again later or contact support.",
        }),
    standardHeaders: true,
    legacyHeaders: false,
});

const validateForgotPassword = (req, res, next) => {
    const { error } = forgotPasswordSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return res.status(400).json({
            errors: error.details.map(err => err.message),
        });
    }
    next();
};

const validateResetPassword = (req, res, next) => {
    const { error } = resetPasswordSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return res.status(400).json({
            errors: error.details.map(err => err.message),
        });
    }
    next();
};

module.exports = {
    forgotPasswordLimiter,
    resetPasswordLimiter,
    validateForgotPassword,
    validateResetPassword,
};
