const Joi = require("joi");

const userProfileSchema = Joi.object({
    full_name: Joi.string().required(),
    birth_date: Joi.date().optional(),
    phone_number: Joi.string().optional(),
    jenis_kelamin: Joi.string().valid("laki2", "perempuan").optional(),
    id_line: Joi.string().optional(),
    id_discord: Joi.string().optional(),
    id_instagram: Joi.string().optional(),
    pendidikan: Joi.string().optional(),
    nama_sekolah: Joi.string().optional(),
});

module.exports = { userProfileSchema };