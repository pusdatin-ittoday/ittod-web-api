const Joi = require("joi");

const bootcampRegisterSchema = Joi.object({
    event_id: Joi.string().required().messages({
        "any.required": "Event ID is required.",
        "string.base": "Event ID must be a string.",
    }),
    institution_name: Joi.string().optional().allow(null, "").messages({
        "string.base": "Institution name must be a string.",
    }),
    phone_number: Joi.string()
        .pattern(/^(\+?[0-9]{8,16})$/)
        .optional()
        .allow(null, "")
        .messages({
            "string.pattern.base":
                "Phone number must be a valid phone format.",
        }),
    bundling: Joi.string()
        .optional()
        .allow(null, "")
        .messages({
            "string.base": "Bundling must be a string.",
        }),
});

module.exports = bootcampRegisterSchema;
