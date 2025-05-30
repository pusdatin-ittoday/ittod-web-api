const { Router } = require("express");
const multer = require("multer");
const {
    getFileFromBucket,
    uploadFileToBucket,
} = require("../controllers/upload.controller");
const images = multer({ storage: multer.memoryStorage() }); // Use memory storage for Buffer
const uploadRouter = Router();
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const { validateFile } = require("../middleware/imageValidator.js");
const {
    getImageFromR2Validator,
} = require("../middleware/getImageFromR2Validator");

uploadRouter.get(
    "/api/images/:key",
    isAuthenticated,
    getImageFromR2Validator,
    getFileFromBucket
);

uploadRouter.post(
    "/api/images/",
    isAuthenticated,
    validateFile,
    images.single("image"),
    uploadFileToBucket
);

module.exports = uploadRouter;
