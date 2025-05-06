const Joi = require("joi");

const fileSchema = Joi.object({
    title: Joi.string().min(3).required().messages({
        "string.min": "Title must be at least 3 characters long.",
        "any.required": "Title is required.",
    }),
    url_file: Joi.string().uri().required().messages({
        "string.uri": "A valid URL is required.",
        "any.required": "File URL is required.",
    }),
    team_id: Joi.string().min(1).required().messages({
        "string.min": "Team ID must be at least 2 characters long.",
        "any.required": "Team ID is required.",
    }),
});

module.exports = fileSchema;
