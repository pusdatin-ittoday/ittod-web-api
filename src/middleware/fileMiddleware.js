const fileSchema =  require( "../validators/fileValidationSchema.js");

const validateFile = (req, res, next) => {
    const { error } = fileSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ errors: error.details.map(err => err.message) });
    }
    next();
};

module.exports = validateFile;
