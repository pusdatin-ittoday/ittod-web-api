const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
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
    forcePathStyle: true,
});

(async () => {
  try {
    const buf = Buffer.from("test");
    const command = new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME || "ittoday",
        Key: "test2.txt",
        Body: buf,
        ContentType: "text/plain",
    });
    await r2.send(command);
    console.log("Success with forcePathStyle: true");
  } catch (err) {
    console.error("Test error with forcePathStyle:", err.name, err.message);
  }
})();
