const { userProfileSchema } = require("../validators/userDataValidatorSchema");

const validateUserProfile = (req, res, next) => {
    const { error } = userProfileSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateUserProfile };
