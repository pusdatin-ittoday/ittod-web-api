const validateFile = async (req, res, next) => {
    if (!req.file) return next()
    const file = req.file;
    
    // 1. Verify extension
    const path = require('path');
    const allowedExts = ['png', 'jpg', 'jpeg'];
    const ext = path.extname(file.originalname).slice(1).toLowerCase();
    if (!allowedExts.includes(ext)) {
        return res.status(400).json({ message: "Invalid file extension" });
    }
    // 2. Verify magic number
    const FileType = require('file-type');
    const detected = await FileType.fileTypeFromBuffer(file.buffer);
    if (!detected || !['image/png', 'image/jpeg'].includes(detected.mime)) {
        return res.status(400).json({ message: "Invalid file content" });
    }
    if (file.size > 1024 * 1024) { // 1MB limit
        return res.status(400).json({ message: "File size exceeds limit" });
    }
    next();
};

module.exports = { validateFile };