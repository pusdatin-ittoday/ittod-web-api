const { S3Client } = require("@aws-sdk/client-s3");

const endpoint = process.env.R2_LINK;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

const r2 = new S3Client({
    region: "auto",
    endpoint,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
});

module.exports = { r2 };
