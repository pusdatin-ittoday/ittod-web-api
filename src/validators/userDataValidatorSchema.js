const Joi = require("joi").extend(require("@joi/date"));

const userProfileSchema = Joi.object({
    full_name: Joi.string().required().messages({
        "string.base": "Full name must be a string.",
        "any.required": "Full name is required.",
    }),
    birth_date: Joi.date().iso().required().messages({
        "string.base": "Birth date must be a string.",
        "string.isoDate":
            "Birth date must be a valid ISO-8601 date-time (with time).",
        "any.required": "Birth date is required.",
    }),
    phone_number: Joi.string()
        .pattern(/^[0-9+\-\s]+$/)
        .required()
        .messages({
            "string.base": "Phone number must be a string.",
            "string.pattern.base": "Please provide a valid phone number.",
            "any.required": "Phone number is required.",
        }),
    jenis_kelamin: Joi.string()
        .valid("laki2", "perempuan")
        .required()
        .messages({
            "string.base": "Gender must be a string.",
            "any.only": "Gender must be either 'laki2' or 'perempuan'.",
            "any.required": "Gender is required.",
        }),
    id_line: Joi.string().optional().allow("").messages({
        "string.base": "Line ID must be a string.",
    }),
    id_discord: Joi.string().required().messages({
        "string.base": "Discord ID must be a string.",
        "any.required": "Discord ID is required.",
    }),
    id_instagram: Joi.string().required().messages({
        "string.base": "Instagram ID must be a string.",
        "any.required": "Instagram ID is required.",
    }),
    pendidikan: Joi.string().required().messages({
        "string.base": "Education level must be a string.",
        "any.required": "Education level is required.",
    }),
    nama_sekolah: Joi.string().required().messages({
        "string.base": "School name must be a string.",
        "any.required": "School name is required.",
    }),
    ktm_key: Joi.string().optional().messages({
        "string.base": "KTM key must be a string.",
    }),
    twibbon_key: Joi.string().optional().messages({
        "string.base": "Twibbon key must be a string.",
    }),
});

module.exports = { userProfileSchema };
