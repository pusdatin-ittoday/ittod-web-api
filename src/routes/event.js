const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const {
    eventJoinController,
    eventShowController,
    bootcampRegistrationController,
    checkIPBOrMinetodayController,
} = require("../controllers/event-user.controller");
const eventRegisterSchema = require("../validators/eventRegisterValidationSchema");
const { validateRequest } = require("../middleware/joiMiddleware");
const bootcampRegisterSchema = require("../validators/bootcampRegistrationSchema");
const multer = require("multer");
const { validateFile } = require("../middleware/imageValidator");
const {
    uploadBootcampPaymentController,
} = require("../controllers/bootcamp-payment.controller");
const images = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB limit
    },
});

const {
    getEventsController,
    getEventByIdController,
} = require("../controllers/event-public.controller");

const {
    getCompetitionResultsController,
} = require("../controllers/competition-results.controller");
const prisma = require("../prisma");

const eventRouter = Router();

// Staging helper endpoint to easily trigger finalist & champion board (Strictly blocked in production)
eventRouter.get("/api/staging/trigger-finalist", async (req, res) => {
    // Safety Guard: Block execution if running in production
    const isStaging = process.env.APP_BASE_URL?.includes("staging") ||
                      req.hostname?.includes("staging") ||
                      process.env.ALLOW_STAGING_TRIGGERS === "true";

    if (!isStaging) {
        return res.status(403).json({
            success: false,
            error: "Forbidden: Staging trigger endpoints are disabled in production environment.",
        });
    }

    try {
        // 0. Ensure columns is_finalist and rank exist on table `team`
        try {
            await prisma.$executeRawUnsafe("ALTER TABLE `team` ADD COLUMN `is_finalist` TINYINT(1) NOT NULL DEFAULT 0;");
        } catch (_) {}
        try {
            await prisma.$executeRawUnsafe("ALTER TABLE `team` ADD COLUMN `rank` INT NULL;");
        } catch (_) {}

        const slug = req.query.slug || "ux-today";
        const event = await prisma.event.findFirst({
            where: {
                OR: [{ slug: slug }, { id: slug }],
                type: "competition",
            },
        });

        if (!event) {
            return res.status(404).json({ success: false, message: `Event ${slug} not found` });
        }

        const now = new Date();
        const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

        // 1. Ensure timeline for Finalis exists and is in the past
        let finalistTimeline = await prisma.event_timeline.findFirst({
            where: {
                event_id: event.id,
                title: { contains: "finalis" },
            },
        });

        if (finalistTimeline) {
            await prisma.event_timeline.update({
                where: { id: finalistTimeline.id },
                data: { date: yesterday },
            });
        } else {
            await prisma.event_timeline.create({
                data: {
                    id: require("crypto").randomUUID(),
                    event_id: event.id,
                    title: `Pengumuman Finalis ${event.title}`,
                    date: yesterday,
                    is_submission: false,
                },
            });
        }

        // 2. Ensure timeline for Juara exists and is in the past
        let championTimeline = await prisma.event_timeline.findFirst({
            where: {
                event_id: event.id,
                title: { contains: "juara" },
            },
        });

        if (championTimeline) {
            await prisma.event_timeline.update({
                where: { id: championTimeline.id },
                data: { date: yesterday },
            });
        } else {
            await prisma.event_timeline.create({
                data: {
                    id: require("crypto").randomUUID(),
                    event_id: event.id,
                    title: `Pengumuman Juara ${event.title}`,
                    date: yesterday,
                    is_submission: false,
                },
            });
        }

        // 3. Find or create teams for this competition
        let existingTeams = await prisma.team.findMany({
            where: { competition_id: event.id },
            include: { members: { include: { user: true } } },
        });

        // If no teams exist, create sample teams so the board displays nicely
        if (existingTeams.length === 0) {
            const sampleTeams = [
                { name: "Tim Aurora UX", rank: 1, univ: "Institut Pertanian Bogor" },
                { name: "Tim Nusantara Creative", rank: 2, univ: "Universitas Indonesia" },
                { name: "Tim Pixel Pioneers", rank: 3, univ: "Institut Teknologi Bandung" },
                { name: "Tim Quantum Flow", rank: null, univ: "Universitas Gadjah Mada" },
                { name: "Tim Syntax Squad", rank: null, univ: "Institut Teknologi Sepuluh Nopember" },
            ];

            for (const st of sampleTeams) {
                const userId = require("crypto").randomUUID();
                const teamId = require("crypto").randomUUID();
                const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

                await prisma.user.create({
                    data: {
                        id: userId,
                        email: `sample.${randomCode.toLowerCase()}@ittoday.web.id`,
                        full_name: `Ketua ${st.name}`,
                        nama_sekolah: st.univ,
                        pendidikan: "s1",
                        identity: {
                            create: {
                                email: `sample.${randomCode.toLowerCase()}@ittoday.web.id`,
                                provider: "basic",
                                role: "user",
                            },
                        },
                    },
                });

                await prisma.team.create({
                    data: {
                        id: teamId,
                        competition_id: event.id,
                        team_name: st.name,
                        team_code: `STG-${randomCode}`,
                        is_finalist: true,
                        is_verified: "approved",
                        is_document_verified: "approved",
                        rank: st.rank,
                        members: {
                            create: {
                                user_id: userId,
                                role: "leader",
                                is_verified: true,
                            },
                        },
                    },
                });
            }
        } else {
            // Update existing teams: set up to 3 as champions (rank 1, 2, 3) and others as finalists
            for (let i = 0; i < existingTeams.length; i++) {
                const rank = i === 0 ? 1 : i === 1 ? 2 : i === 2 ? 3 : null;
                await prisma.team.update({
                    where: { id: existingTeams[i].id },
                    data: {
                        is_finalist: true,
                        is_verified: "approved",
                        rank: rank,
                    },
                });
            }
        }

        return res.json({
            success: true,
            message: `Finalist & Champion board successfully triggered for ${event.title}!`,
            event: event.title,
            slug: event.slug,
            previewUrl: `https://staging.ittoday.web.id/competition/${event.slug || "ux-today"}`,
        });
    } catch (err) {
        console.error("Error triggering finalist on staging:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
});

eventRouter.get("/api/events", getEventsController);
eventRouter.get("/api/events/:id/results", getCompetitionResultsController);
eventRouter.get("/api/events/:id", getEventByIdController);

eventRouter.post(
    "/api/event/join",
    isAuthenticated,
    validateRequest(eventRegisterSchema),
    eventJoinController
);
eventRouter.post(
    "/api/event/bootcamp/join",
    isAuthenticated,
    validateRequest(bootcampRegisterSchema),
    bootcampRegistrationController
);

eventRouter.get("/api/event/", isAuthenticated, eventShowController);

eventRouter.post(
    "/api/event/bootcamp/payment",
    isAuthenticated,
    images.single("image"),
    validateFile,
    uploadBootcampPaymentController
);
const {
    uploadEventPaymentController,
} = require("../controllers/event-payment.controller");

eventRouter.post(
    "/api/event/payment",
    isAuthenticated,
    images.single("image"),
    validateFile,
    uploadEventPaymentController
);

eventRouter.post(
    "/api/event/workshop/payment",
    isAuthenticated,
    images.single("image"),
    validateFile,
    uploadEventPaymentController
);

eventRouter.get(
    "/api/event/check-ipb-or-minetoday",
    isAuthenticated,
    checkIPBOrMinetodayController
);

// Seminar Nasional — kuesioner + upload bukti follow IG (PDF)
const {
    semnasRegisterController,
} = require("../controllers/semnas.controller");

const semnasUpload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB for PDF
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf" || file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("File harus berupa PDF atau gambar."), false);
        }
    },
});

eventRouter.post(
    "/api/event/semnas/register",
    isAuthenticated,
    semnasUpload.single("ig_follow_proof"),
    semnasRegisterController
);

module.exports = eventRouter;
