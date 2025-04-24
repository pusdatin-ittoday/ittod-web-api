import Joi from "joi";

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "A valid email is required.",
        "any.required": "Email is required.",
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "Password must be at least 6 characters long.",
        "any.required": "Password is required.",
    }),
});

const validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res
            .status(400)
            .json({ errors: error.details.map(err => err.message) });
    }
    next();
};

export { validateLogin };