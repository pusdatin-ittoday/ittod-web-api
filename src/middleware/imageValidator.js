const validateFile = (req, res, next) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: "File is required" });
    }

    const allowedMimeTypes = ["image/png", "image/jpeg"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
        return res.status(400).json({ message: "Invalid file type" });
    }

    if (file.size > 1024 * 1024) { // 1MB limit
        return res.status(400).json({ message: "File size exceeds limit" });
    }

    next();
};

module.exports = { validateFile };