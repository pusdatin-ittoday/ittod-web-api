const { getFileFromR2, uploadFileToR2 } = require("../services/r2.service");
const { getContentTypeFromKey } = require("../helpers/getContentTypeFromKey");
const getFileFromBucket = async (req, res) => {
    const key = req.params.key;

    try {
        const fileBuffer = await getFileFromR2(key);

        // Set headers for image content
        const contentType =
            getContentTypeFromKey(key) || "application/octet-stream";
        res.setHeader("Content-Type", contentType);
        res.setHeader("Content-Disposition", `inline; filename="${key}"`);

        res.status(200).send(fileBuffer);
    } catch (error) {
        console.error("Failed to fetch file:", error);
        res.status(500).json({
            message: "Failed to fetch file",
            error:
                process.env.NODE_ENV === "production"
                    ? "Internal server error"
                    : error.message,
        });
    }
};

const uploadFileToBucket = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const allowedMimeTypes = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "application/pdf",
        ];

        if (!allowedMimeTypes.includes(file.mimetype)) {
            return res.status(400).json({
                message:
                    "Invalid file type. Allowed types: JPEG, PNG, GIF, PDF",
            });
        }

        const { buffer, originalname, mimetype } = file;

        const { key } = await uploadFileToR2(buffer, originalname, mimetype);

        res.status(200).json({
            message: "File uploaded successfully",
            key,
        });
    } catch (error) {
        console.error("File images failed:", error);
        res.status(500).json({
            message: "File images failed",
            error: error.message,
        });
    }
};

module.exports = { getFileFromBucket, uploadFileToBucket };
