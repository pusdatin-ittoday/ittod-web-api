import Joi from "joi";

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "A valid email is required.",
        "any.required": "Email is required.",
    }),
    password: Joi.string().min(8).required().messages({
        "string.min": "Password must be at least 8 characters long.",
        "any.required": "Password is required.",
    }),
});

export default loginSchema;
