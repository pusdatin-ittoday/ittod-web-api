require('dotenv').config();
const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");
const r2 = new S3Client({
    region: "auto",
    endpoint: process.env.R2_LINK,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
});
r2.send(new ListObjectsV2Command({ Bucket: process.env.R2_BUCKET_NAME })).then(() => console.log("Success")).catch(e => console.error("Error:", e.message));
