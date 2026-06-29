const Joi = require("joi");

const competitionSubmissionSchema = Joi.object({
    team_id: Joi.string().trim().required().messages({
        "string.empty": "Team ID is required.",
        "any.required": "Team ID is required.",
    }),
    submission_object: Joi.object().min(1).required().messages({
        "object.min": "Submission data cannot be empty.",
        "any.required": "Submission data is required.",
    }),
});

module.exports = competitionSubmissionSchema;
