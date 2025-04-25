import Joi from "joi";

const registerSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "A valid email is required.",
        "any.required": "Email is required.",
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "Password must be at least 6 characters long.",
        "any.required": "Password is required.",
    }),
    full_name: Joi.string().min(6).required().messages({
        "string.min": "Full name must be at least 6 characters long.",
        "any.required": "Full name is required.",
    })
});

export default registerSchema;