const { Router } = require("express");
const multer = require("multer");
const {
    getFileFromBucket,
    uploadFileToBucket,
} = require("../controllers/upload.controller");
const images = multer({ storage: multer.memoryStorage() }); // Use memory storage for Buffer
const uploadRouter = Router();
const { isAuthenticated } = require("../middleware/authMiddleware.js");

uploadRouter.get("/api/images/:key", isAuthenticated, getFileFromBucket);

uploadRouter.post(
    "/api/images/",
    isAuthenticated,
    images.single("image"),
    uploadFileToBucket
);

module.exports = uploadRouter;
