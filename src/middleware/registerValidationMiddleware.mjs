import Joi from "joi";
import registerSchema from "../validators/registerValidationSchema.mjs";

const validateRegister = (req, res, next) => {
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ errors: error.details.map(err => err.message) });
    }
    next();
};

export { validateRegister };
