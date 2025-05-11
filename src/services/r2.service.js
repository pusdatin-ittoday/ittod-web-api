const { PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { r2 } = require("../r2.js");
const crypto = require("crypto");
const dayjs = require("dayjs");

async function uploadFileToR2(fileBuffer, originalName, mimeType) {
    const datePath = dayjs().format("YYYY-MM-DD");
    const uniqueName = `${crypto.randomUUID()}_${originalName}`;
    const fileKey = `uploads/${datePath}/${uniqueName}`;

    const command = new PutObjectCommand({
        Bucket: "ittoday",
        Key: fileKey,
        Body: fileBuffer,
        ContentType: mimeType,
    });

    try {
        await r2.send(command);
        const fileUrl = `${process.env.R2_PUBLIC}/${fileKey}`;
        return { key: fileKey, url: fileUrl };
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
