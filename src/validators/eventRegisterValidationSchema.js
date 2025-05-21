const Joi = require("joi");

const eventRegisterSchema = Joi.object({
    event_id: Joi.string().required().messages({
        "any.required": "Event ID is required.",
        "string.base": "Event ID must be a string.",
    }),
    institution_name: Joi.string().required().messages({
        "any.required": "Institution name is required.",
        "string.base": "Institution name must be a string.",
    }),
    phone_number: Joi.string()
        .pattern(/^\+?[1-9]\d{1,14}$/)
        .required()
        .messages({
            "any.required": "Phone number is required.",
            "string.pattern.base":
                "Phone number must be a valid international format.",
        }),
});

module.exports = eventRegisterSchema;
