const prisma = require("../prisma");
const crypto = require("crypto");
const { uploadFileToR2 } = require("../services/r2.service");

/**
 * POST /api/event/semnas/register
 * Khusus pendaftaran Seminar Nasional — kuesioner + upload bukti follow IG.
 */
const semnasRegisterController = async (req, res) => {
    try {
        const userId = req.user.id;

        const {
            event_id,
            kenal_sentral_komputer,
            sumber_kenal_sentral,
            kenal_acer,
            kenal_nvidia,
            kenal_microsoft,
        } = req.body;

        if (!event_id) {
            return res.status(400).json({ success: false, message: "event_id wajib diisi." });
        }

        // Resolve event (by id or slug)
        const event = await prisma.event.findFirst({
            where: {
                OR: [{ id: event_id }, { slug: event_id }],
                type: "non_competition",
            },
        });

        if (!event) {
            return res.status(404).json({ success: false, message: "Event Seminar Nasional tidak ditemukan." });
        }

        if (!event.is_active) {
            return res.status(400).json({ success: false, message: "Pendaftaran Seminar Nasional telah ditutup." });
        }

        const actualEventId = event.id;

        // Cek apakah sudah pernah daftar
        const existing = await prisma.event_participant.findFirst({
            where: { user_id: userId, event_id: actualEventId },
        });

        if (existing) {
            return res.status(403).json({ success: false, message: "Anda sudah terdaftar di Seminar Nasional." });
        }

        // Cek profil lengkap
        const userData = await prisma.user.findFirst({
            where: { id: userId },
            select: {
                full_name: true,
                birth_date: true,
                phone_number: true,
                jenis_kelamin: true,
                pendidikan: true,
                nama_sekolah: true,
                is_registration_complete: true,
            },
        });

        const isFieldFilled = (val) => val !== null && val !== undefined && String(val).trim() !== "";
        const isComplete = userData?.is_registration_complete === 1 || (
            isFieldFilled(userData?.full_name) &&
            userData?.birth_date &&
            isFieldFilled(userData?.phone_number) &&
            isFieldFilled(userData?.nama_sekolah)
        );

        if (!isComplete) {
            return res.status(400).json({
                success: false,
                message: "Lengkapi data profil terlebih dahulu di menu Edit Profil sebelum mendaftar.",
            });
        }

        // Upload bukti follow IG (PDF)
        let igFollowProofKey = null;
        if (req.file) {
            const { buffer, originalname, mimetype } = req.file;
            const result = await uploadFileToR2(buffer, originalname, mimetype);
            igFollowProofKey = result.key;
        }

        // Transaction: insert semnas_participant + event_participant
        await prisma.$transaction(async (tx) => {
            // Cek kapasitas event
            const lockedEvent = await tx.event.findUnique({
                where: { id: actualEventId },
                select: { max_noncompetition_participant: true },
            });

            const maxParticipants = lockedEvent?.max_noncompetition_participant;
            if (maxParticipants !== null) {
                const currentCount = await tx.event_participant.count({
                    where: {
                        event_id: actualEventId,
                        payment_verification: { in: ["pending", "accepted"] },
                    },
                });
                if (currentCount >= maxParticipants) {
                    throw { status: 403, message: "Kuota Seminar Nasional sudah penuh." };
                }
            }

            // Insert ke semnas_participant
            const semnasId = crypto.randomUUID();
            await tx.$executeRawUnsafe(
                `INSERT INTO semnas_participant (id, user_id, event_id, kenal_sentral_komputer, sumber_kenal_sentral, kenal_acer, kenal_nvidia, kenal_microsoft, ig_follow_proof_key, created_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
                semnasId,
                userId,
                actualEventId,
                kenal_sentral_komputer === "true" || kenal_sentral_komputer === true ? 1 : 0,
                sumber_kenal_sentral || null,
                kenal_acer === "true" || kenal_acer === true ? 1 : 0,
                kenal_nvidia === "true" || kenal_nvidia === true ? 1 : 0,
                kenal_microsoft === "true" || kenal_microsoft === true ? 1 : 0,
                igFollowProofKey,
            );

            // Insert ke event_participant (agar terdeteksi oleh sistem lama)
            await tx.event_participant.create({
                data: {
                    user_id: userId,
                    event_id: actualEventId,
                    payment_verification: "pending",
                    payment_proof: igFollowProofKey || "uploaded",
                },
            });
        });

        return res.status(201).json({
            success: true,
            message: "Pendaftaran Seminar Nasional berhasil! Menunggu verifikasi panitia.",
        });
    } catch (err) {
        console.error("Semnas Registration Error:", err);
        if (err.status) {
            return res.status(err.status).json({ success: false, message: err.message });
        }
        return res.status(500).json({ success: false, message: "Terjadi kesalahan server." });
    }
};

/**
 * POST /api/event/semnas/resubmit
 * Kirim ulang bukti follow IG untuk pendaftaran Seminar Nasional yang ditolak.
 */
const semnasResubmitController = async (req, res) => {
    try {
        const userId = req.user.id;
        const { event_id } = req.body;

        if (!event_id) {
            return res.status(400).json({ success: false, message: "event_id wajib diisi." });
        }

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Bukti follow Instagram wajib diunggah." });
        }

        // Resolve event (by id or slug)
        const event = await prisma.event.findFirst({
            where: {
                OR: [{ id: event_id }, { slug: event_id }],
                type: "non_competition",
            },
        });

        if (!event) {
            return res.status(404).json({ success: false, message: "Event Seminar Nasional tidak ditemukan." });
        }

        const participant = await prisma.event_participant.findFirst({
            where: { user_id: userId, event_id: event.id },
            select: { payment_verification: true },
        });

        if (!participant) {
            return res.status(404).json({ success: false, message: "Pendaftaran Seminar Nasional tidak ditemukan." });
        }

        // Hanya pendaftaran yang ditolak yang boleh mengirim ulang
        if (participant.payment_verification !== "rejected") {
            return res.status(400).json({
                success: false,
                message: "Pengiriman ulang hanya tersedia untuk pendaftaran yang berstatus ditolak.",
            });
        }

        const { buffer, originalname, mimetype } = req.file;
        const result = await uploadFileToR2(buffer, originalname, mimetype);

        await prisma.$transaction(async (tx) => {
            await tx.$executeRawUnsafe(
                `UPDATE semnas_participant SET ig_follow_proof_key = ? WHERE user_id = ? AND event_id = ?`,
                result.key,
                userId,
                event.id,
            );

            await tx.event_participant.update({
                where: {
                    user_id_event_id: { user_id: userId, event_id: event.id },
                },
                data: {
                    payment_proof: result.key,
                    payment_verification: "pending",
                },
            });
        });

        return res.status(200).json({
            success: true,
            message: "Bukti follow Instagram berhasil dikirim ulang. Menunggu verifikasi panitia.",
        });
    } catch (err) {
        console.error("Semnas Resubmit Error:", err);
        if (err.status) {
            return res.status(err.status).json({ success: false, message: err.message });
        }
        return res.status(500).json({ success: false, message: "Terjadi kesalahan server." });
    }
};

module.exports = { semnasRegisterController, semnasResubmitController };
