const Joi = require("joi");

const forgotPasswordSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Please provide a valid email address",
        "any.required": "Email is required",
    }),
});

const resetPasswordSchema = Joi.object({
    token: Joi.string().required().messages({
        "any.required": "Reset token is required",
    }),
    newPassword: Joi.string().min(8).required().messages({
        "string.min": "Password must be at least 8 characters long",
        "any.required": "New password is required",
    }),
});

module.exports = {
    forgotPasswordSchema,
    resetPasswordSchema,
};
