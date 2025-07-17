/**
 * Factory function to create reusable validation middleware
 * @param {Object} schema - Joi validation schema
 * @param {string} source - Source of data to validate ('params', 'query', 'body', or 'combined')
 * @returns {Function} Express middleware function
 */
const validateRequest = (schema, source) => {
    return (req, res, next) => {
        let dataToValidate;

        switch (source) {
            case 'params':
                dataToValidate = req.params;
                break;
            case 'query':
                dataToValidate = req.query;
                break;
            case 'body':
                dataToValidate = req.body;
                break;
            case 'combined':
                dataToValidate = { ...req.params, ...req.body };
                break;
            default:
                return res.status(500).json({
                    success: false,
                    message: 'Invalid validation source specified'
                });
        }

        const { error } = schema.validate(dataToValidate);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }
        next();
    };
};

module.exports = { validateRequest }; 