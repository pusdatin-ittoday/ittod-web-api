const { Router } = require("express");
const multer = require("multer");
const { getType } = require("mime");
const { uploadFileToR2, getFileFromR2 } = require("../services/r2.service");

const upload = multer({ storage: multer.memoryStorage() }); // Use memory storage for Buffer
const uploadRouter = Router();



uploadRouter.get("/api/images/:key", async (req, res) => {
    const key = req.params.key;

    try {
        const fileBuffer = await getFileFromR2(key);

        // Set headers for image content
        res.setHeader("Content-Type", "image/png"); // Always set as image/png
        res.setHeader("Content-Disposition", `inline; filename="${key}"`);

        res.status(200).send(fileBuffer);
    } catch (error) {
        console.error("Failed to fetch file:", error);
        res.status(500).json({ message: "Failed to fetch file", error: error.message });
    }
});

uploadRouter.post(
    "/api/images/",
    upload.single("image"),
    async (req, res) => {
        try {
            const file = req.file;

            if (!file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const { buffer, originalname, mimetype } = file;

            const { key } = await uploadFileToR2(
                buffer,
                originalname,
                mimetype
            );

            res.status(200).json({
                message: "File uploaded successfully",
                key,
            });
        } catch (error) {
            console.error("File upload failed:", error);
            res.status(500).json({
                message: "File upload failed",
                error: error.message,
            });
        }
    }
);

module.exports = uploadRouter;
