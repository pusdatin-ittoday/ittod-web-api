const { PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { r2 } = require("../r2.js");
const crypto = require("crypto");
const dayjs = require("dayjs");

async function uploadFileToR2(fileBuffer, originalName, mimeType) {
    if (!Buffer.isBuffer(fileBuffer)) {
        throw new Error("Invalid fileBuffer: Expected a Buffer.");
    }

    const safeOriginalName = originalName.replace(/\s+/g, "_");
    const uniqueName = `${crypto.randomUUID()}_${safeOriginalName}`;
    const fileKey = `uploads/${uniqueName}`;

    const command = new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME || "ittoday",
        Key: uniqueName,
        Body: fileBuffer,
        ContentType: mimeType,
    });

    try {
        await r2.send(command);
        const fileUrl = `${process.env.R2_PUBLIC}/${fileKey}`;
        return { key: uniqueName, url: fileUrl };
    } catch (err) {
        console.error("R2 Upload Failed:", err);
        throw err;
    }
}

async function getFileFromR2(fileName) {
    const command = new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME || "ittoday",
        Key: fileName,
    });

    try {
        const response = await r2.send(command);
        const stream = response.Body; // Readable stream

        // Convert the stream to a buffer
        const chunks = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const fileBuffer = Buffer.concat(chunks);
        return fileBuffer;
    } catch (err) {
        console.error("R2 Fetch Failed:", err);
        throw err;
    }
}

module.exports = { uploadFileToR2, getFileFromR2 };
