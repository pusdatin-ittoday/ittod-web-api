const getImageFromR2Validator = (req, res, next) => {
    const key = req.params.key;
    const validKeyPattern = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (
        !key ||
        key.includes("/") ||
        key.includes("..") ||
        !validKeyPattern.test(key)
    ) {
        return res.status(400).json({ message: "Invalid file key" });
    }
    next();
};
module.exports = { getImageFromR2Validator };
