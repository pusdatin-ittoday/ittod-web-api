const Joi = require('joi');

const registerSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "A valid email is required.",
        "any.required": "Email is required.",
    }),
    password: Joi.string().min(8).required().messages({
        "string.min": "Password must be at least 8 characters long.",
        "any.required": "Password is required.",
    }),
    full_name: Joi.string().min(2).required().messages({
        "string.min": "Full name must be at least 2 characters long.",
        "any.required": "Full name is required.",
    }),
});

module.exports = registerSchema;
