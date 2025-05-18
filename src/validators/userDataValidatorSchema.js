const Joi = require("joi").extend(require('@joi/date'));

const userProfileSchema = Joi.object({
    full_name: Joi.string().required().messages({
        "string.base": "Full name must be a string.",
        "any.required": "Full name is required.",
    }),
    birth_date: Joi
        .dateTime()
        .optional()
        .messages({
            "string.base": "Birth date must be a string.",
            "string.isoDate":
                "Birth date must be a valid ISO-8601 date-time (with time).",
        }),
    phone_number: Joi.string()
        .pattern(/^[0-9+\-\s]+$/)
        .optional()
        .messages({
            "string.base": "Phone number must be a string.",
            "string.pattern.base": "Please provide a valid phone number.",
        }),
    jenis_kelamin: Joi.string()
        .valid("laki2", "perempuan")
        .optional()
        .messages({
            "string.base": "Gender must be a string.",
            "any.only": "Gender must be either 'laki2' or 'perempuan'.",
        }),
    id_line: Joi.string().optional().messages({
        "string.base": "Line ID must be a string.",
    }),
    id_discord: Joi.string().optional().messages({
        "string.base": "Discord ID must be a string.",
    }),
    id_instagram: Joi.string().optional().messages({
        "string.base": "Instagram ID must be a string.",
    }),
    pendidikan: Joi.string().optional().messages({
        "string.base": "Education level must be a string.",
    }),
    nama_sekolah: Joi.string().optional().messages({
        "string.base": "School name must be a string.",
    }),
});

module.exports = { userProfileSchema };
