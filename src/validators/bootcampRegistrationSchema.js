const Joi = require("joi");

const bootcampRegisterSchema = Joi.object({
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
    bundling: Joi.string()
        .valid("day1", "day2", "day1_day2")
        .required()
        .messages({
            "any.required": "Bundling is required.",
            "string.base": "Bundling must be a string.",
            "any.only":
                "Bundling must be either 'day1', 'day2', or 'day1_day2'.",
        }),
});

module.exports = bootcampRegisterSchema;
