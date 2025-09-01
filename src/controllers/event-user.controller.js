const prisma = require("../prisma");
const { registerUserIntoEvent } = require("../services/event.service");
const { registerUserIntoBootcamp } = require("../services/bootcamp.service");

const eventJoinController = async (req, res) => {
    try {
        const user_id = req.user.id;
        const { event_id, institution_name, phone_number, date_of_birth } = req.body;

        const result = await registerUserIntoEvent(
            user_id,
            event_id,
            institution_name,
            phone_number,
            date_of_birth
        );

        res.status(201).json(result);
    } catch (err) {
        console.error("Error registering user into event", err);
        res.status(err.status || 500).json({
            error: err.message || "Failed to register user into event",
        });
    }
};

const eventShowController = async (req, res) => {
    try {
        const user_id = req.user.id;
        const result = await prisma.event_participant.findMany({
            where: { user_id },
            select: {
                event_id: true,
                payment_verification: true,
                event: {
                    select: { title: true, },
                },
            },
        });
        res.status(200).json(result);
    } catch (err) {
        console.error("Error fetching user events", err);
        res.status(err.status || 500).json({
            error: err.message || "Failed to fetch user events",
        });
    }
};

const bootcampRegistrationController = async (req, res) => {
    try {
        const user_id = req.user.id;
        const { event_id, institution_name, phone_number, bundling } = req.body;

        await registerUserIntoBootcamp({
            user_id,
            event_id,
            institution_name,
            phone_number,
            bundling,
        });

        res.status(201).json({
            message: "Successfully registered into bootcamp!",
        });
    } catch (err) {
        console.error("Error registering user into bootcamp", err);
        res.status(err.status || 500).json({
            error: err.message || "Failed to register user into bootcamp",
        });
    }
};

const checkIPBOrMinetodayController = async (req, res) => {
    try {
        const user_id = req.user.id;
        // 1. Check if user's institution is 'IPB'
        const user = await prisma.user.findUnique({
            where: { id: user_id },
            select: { nama_sekolah: true },
        });
        const namaSekolah = user?.nama_sekolah?.toLowerCase() || "";
        const isIPB = /(ipb|institut pertanian bogor)/i.test(namaSekolah);

        // 2. Check if user is registered to 'minetoday' event (by title)
        // Find the event ID for 'minetoday' (case-insensitive)
        const minetodayEvent = await prisma.event.findFirst({
            where: { title: { equals: "MineToday" } },
            select: { id: true },
        });
        let isRegisteredToMinetoday = false;
        let paymentVerification = null;
        let paymentStatus = false;
        if (minetodayEvent) {
            const participant = await prisma.event_participant.findFirst({
                where: { user_id, event_id: minetodayEvent.id },
                select: { payment_verification: true },
            });
            isRegisteredToMinetoday = !!participant;
            paymentVerification = participant
                ? participant.payment_verification
                : null;
            paymentStatus = participant
                ? participant.payment_verification === "accepted"
                : false;
        }

        res.status(200).json({
            isIPB,
            isRegisteredToMinetoday,
            paymentVerification,
            paymentStatus,
        });
    } catch (err) {
        console.error("Error checking IPB or minetoday registration", err);
        res.status(500).json({
            error:
                err.message || "Failed to check IPB or minetoday registration",
        });
    }
};

module.exports = {
    eventJoinController,
    eventShowController,
    checkIPBOrMinetodayController,
    bootcampRegistrationController,
};
