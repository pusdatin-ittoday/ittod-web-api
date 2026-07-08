const path = require("path");
const validateOptionalFile = async (req, res, next) => {
    try {
        let filesToValidate = [];
        if (req.file) {
            filesToValidate.push(req.file);
        }
        if (req.files) {
            Object.values(req.files).forEach(fileArray => {
                filesToValidate = filesToValidate.concat(fileArray);
            });
        }

        if (filesToValidate.length === 0) return next();

        const allowedExts = ["png", "jpg", "jpeg", "webp"];

        for (const file of filesToValidate) {
            // 1. Verify extension
            const ext = path.extname(file.originalname).slice(1).toLowerCase();
            if (!allowedExts.includes(ext)) {
                return res.status(400).json({ message: "Invalid file extension: " + ext });
            }

            if (file.size > 2 * 1024 * 1024) {
                return res.status(400).json({ message: "File size exceeds limit of 2MB" });
            }

            // 2. Verify magic number (fallback gracefully if file-type fails to load)
            try {
                const { fileTypeFromBuffer } = await import("file-type");
                const detected = await fileTypeFromBuffer(file.buffer);
                if (!detected || !["image/png", "image/jpeg", "image/webp"].includes(detected.mime)) {
                    return res.status(400).json({ message: "Invalid file content" });
                }
            } catch (err) {
                console.warn("Could not verify file magic number:", err);
            }
        }
        
        next();
    } catch (error) {
        console.error("Validation error:", error);
        return res.status(500).json({ message: "Internal server error during file validation" });
    }
};

module.exports = { validateFile: validateOptionalFile };
