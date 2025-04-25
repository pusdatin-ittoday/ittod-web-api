import Joi from "joi";

const changeUsernameSchema = Joi.object({
    oldUsername: Joi.string().required().messages({
        "string.base": "Old username must be a string.",
        "any.required": "Old username is required.",
    }),
    newUsername: Joi.string().min(3).max(20).required().messages({
        "string.base": "New username must be a string.",
        "string.min": "New username must be at least 3 characters long.",
        "string.max": "New username must not exceed 20 characters.",
        "any.required": "New username is required.",
    }),
});

export default changeUsernameSchema;