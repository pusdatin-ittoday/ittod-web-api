const Joi = require("joi");

// Validation for team verification
const verifyTeamSchema = Joi.object({
    teamId: Joi.string().uuid().required().messages({
        "string.guid": "Team ID must be a valid UUID.",
        "any.required": "Team ID is required.",
    }),
});

// Validation for team rejection
const rejectTeamSchema = Joi.object({
    teamId: Joi.string().uuid().required().messages({
        "string.guid": "Team ID must be a valid UUID.",
        "any.required": "Team ID is required.",
    }),
    reason: Joi.string().max(1000).optional().messages({
        "string.max": "Rejection reason cannot exceed 1000 characters.",
    }),
});

// Validation for member status update
const updateMemberStatusSchema = Joi.object({
    memberId: Joi.string().uuid().required().messages({
        "string.guid": "Member ID must be a valid UUID.",
        "any.required": "Member ID is required.",
    }),
    is_complete: Joi.boolean().required().messages({
        "boolean.base": "is_complete must be a boolean value.",
        "any.required": "is_complete is required.",
    }),
});

// Validation for team detail query
const teamDetailSchema = Joi.object({
    teamId: Joi.string().uuid().required().messages({
        "string.guid": "Team ID must be a valid UUID.",
        "any.required": "Team ID is required.",
    }),
});

// Validation for teams by competition query
const teamsByCompetitionSchema = Joi.object({
    competition: Joi.string().min(1).max(255).required().messages({
        "string.min": "Competition name cannot be empty.",
        "string.max": "Competition name cannot exceed 255 characters.",
        "any.required": "Competition parameter is required.",
    }),
    page: Joi.number().integer().min(1).optional().default(1).messages({
        "number.base": "Page must be a valid number.",
        "number.integer": "Page must be an integer.",
        "number.min": "Page must be at least 1.",
    }),
    limit: Joi.number()
        .integer()
        .min(1)
        .max(100)
        .optional()
        .default(10)
        .messages({
            "number.base": "Limit must be a valid number.",
            "number.integer": "Limit must be an integer.",
            "number.min": "Limit must be at least 1.",
            "number.max": "Limit cannot exceed 100.",
        }),
});

module.exports = {
    verifyTeamSchema,
    rejectTeamSchema,
    updateMemberStatusSchema,
    teamDetailSchema,
    teamsByCompetitionSchema,
};
