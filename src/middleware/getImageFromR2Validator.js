const getImageFromR2Validator = (req, res, next) => {
    const key = req.params.key;
    if (!key || key.includes('..') || key.includes('/')) {
        return res.status(400).json({ message: "Invalid file key" });
    }
    next();
}
module.exports = {getImageFromR2Validator};