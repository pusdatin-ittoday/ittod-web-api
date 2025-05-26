const Joi = require("joi");

const emailSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "A valid email is required.",
        "any.required": "Email is required.",
    }),
});

module.exports = emailSchema;
