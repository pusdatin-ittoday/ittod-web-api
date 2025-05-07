const changeUsernameSchema = require("../validators/changeUsernameValidationSchema.js");

const validateChangeUsername = (req, res, next) => {
    const { error } = changeUsernameSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return res
            .status(400)
            .json({ errors: error.details.map(err => err.message) });
    }
    next();
};

export { validateChangeUsername };
