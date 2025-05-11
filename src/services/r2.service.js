const { PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { r2 } = require("../r2.js");

async function uploadFileToR2(fileBuffer, fileName, mimeType) {
    const command = new PutObjectCommand({
        Bucket: "ittoday",
        Key: fileName,
        Body: fileBuffer,
        ContentType: mimeType,
    });

    try {
        await r2.send(command);
    } catch (err) {
        console.error("R2 Upload Failed:", err);
        throw err;
    }
}

async function getFileFromR2(fileName) {
    const command = new GetObjectCommand({
        Bucket: "ittoday",
        Key: fileName,
    });

    try {
        const response = await r2.send(command);
        return response.Body; // Readable stream
    } catch (err) {
        console.error("R2 Fetch Failed:", err);
        throw err;
    }
}

module.exports = { uploadFileToR2, getFileFromR2 };
