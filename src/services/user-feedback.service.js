const prisma = require("../prisma.js");
const crypto = require("crypto");
const { uploadFileToR2 } = require("./r2.service.js");

const createFeedback = async ({ userId, subject, content, files = [] }) => {
    if (!subject || subject.trim() === "") {
        throw { status: 400, message: "Subjek / Topik feedback wajib diisi" };
    }
    if (!content || content.trim() === "") {
        throw { status: 400, message: "Isi feedback & saran wajib diisi" };
    }

    const uploadedUrls = [];
    if (files && files.length > 0) {
        for (const file of files) {
            try {
                const res = await uploadFileToR2(file.buffer, file.originalname, file.mimetype);
                if (res && res.url) {
                    uploadedUrls.push(res.url);
                }
            } catch (err) {
                console.error("Failed uploading screenshot for feedback:", err);
            }
        }
    }

    const feedbackId = crypto.randomUUID();
    const created = await prisma.user_feedback.create({
        data: {
            id: feedbackId,
            user_id: userId,
            subject: subject.trim(),
            content: content.trim(),
            media_urls: uploadedUrls.length > 0 ? uploadedUrls : null,
            status: "pending",
        },
    });

    return {
        message: "Feedback & saran berhasil dikirim. Terima kasih atas masukan Anda!",
        data: created,
    };
};

const getUserFeedbacks = async (userId) => {
    const feedbacks = await prisma.user_feedback.findMany({
        where: { user_id: userId },
        orderBy: { created_at: "desc" },
    });
    return feedbacks;
};

module.exports = {
    createFeedback,
    getUserFeedbacks,
};
