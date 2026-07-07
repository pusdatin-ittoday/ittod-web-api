const registerSchema = require("../validators/registerValidationSchema.js");

const validateRegister = (req, res, next) => {
    const { error, value } = registerSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return res
            .status(400)
            .json({ errors: error.details.map(err => err.message) });
    }
    req.body = value;
    next();
};

module.exports = { validateRegister };
