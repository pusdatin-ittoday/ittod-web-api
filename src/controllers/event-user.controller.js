const prisma = require("../prisma");
const { registerUserIntoEvent } = require("../services/event.service");
const { registerUserIntoBootcamp } = require("../services/bootcamp.service");

const eventJoinController = async (req, res) => {
    try {
        const user_id = req.user.id;
        const { event_id, institution_name, phone_number, date_of_birth } =
            req.body;

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
        const participants = await prisma.event_participant.findMany({
            where: { user_id },
            select: {
                event_id: true,
                payment_verification: true,
                payment_proof: true,
                event: {
                    select: { id: true, slug: true, title: true, price: true, whatsapp_group_link: true, type: true },
                },
            },
        });

        // Also fetch individual teams for this user to ensure payment proof and status are always found
        const individualTeams = await prisma.team.findMany({
            where: {
                members: { some: { user_id } },
            },
            select: {
                competition_id: true,
                is_verified: true,
                payment_proof: {
                    select: { url: true },
                },
                competition: {
                    select: { id: true, slug: true, title: true, price: true, whatsapp_group_link: true, type: true },
                },
            },
        });

        const results = [];
        const processedEventKeys = new Set();

        // 1. Process event_participant rows
        for (const p of participants) {
            const matchingTeam = individualTeams.find((t) => {
                const cId = (t.competition_id || "").toLowerCase();
                const eId = (p.event_id || "").toLowerCase();
                const eSlug = (p.event?.slug || "").toLowerCase();
                const eTitle = (p.event?.title || "").toLowerCase();
                return (
                    cId === eId ||
                    cId === eSlug ||
                    (cId.includes("bootcamp") && (eId.includes("bootcamp") || eSlug.includes("bootcamp") || eTitle.includes("bootcamp")))
                );
            });

            const effectivePaymentProof = p.payment_proof || matchingTeam?.payment_proof?.url || null;
            const effectivePaymentVerification = (matchingTeam?.is_verified === "approved" || p.payment_verification === "accepted")
                ? "accepted"
                : (p.payment_verification || (matchingTeam?.is_verified === "rejected" ? "rejected" : "pending"));

            const isVerified = effectivePaymentVerification === "accepted";
            const eventKey = (p.event?.slug || p.event_id || "").toLowerCase();
            processedEventKeys.add(eventKey);
            if (p.event_id) processedEventKeys.add(p.event_id.toLowerCase());
            if (p.event?.title) processedEventKeys.add(p.event.title.toLowerCase());

            results.push({
                event_id: p.event_id,
                payment_verification: effectivePaymentVerification,
                payment_proof: effectivePaymentProof,
                has_payment_proof: Boolean(effectivePaymentProof),
                event: {
                    id: p.event?.id,
                    slug: p.event?.slug,
                    title: p.event?.title,
                    price: p.event?.price,
                    whatsapp_group_link: isVerified ? (p.event?.whatsapp_group_link || null) : null,
                },
            });
        }

        // 2. Also process any non-competition individual team that was not in event_participant
        for (const t of individualTeams) {
            const cId = (t.competition_id || "").toLowerCase();
            const cSlug = (t.competition?.slug || "").toLowerCase();
            const cTitle = (t.competition?.title || "").toLowerCase();

            const isHandled = 
                processedEventKeys.has(cId) || 
                processedEventKeys.has(cSlug) || 
                (cTitle && processedEventKeys.has(cTitle)) ||
                (cId.includes("bootcamp") && (processedEventKeys.has("bootcamp") || [...processedEventKeys].some(x => x.includes("bootcamp"))));

            if (!isHandled) {
                // Include non_competition events or bootcamp
                const isEvent = t.competition?.type === "non_competition" || cId.includes("bootcamp") || cSlug.includes("bootcamp") || cTitle.includes("bootcamp");
                if (isEvent) {
                    const isVerified = t.is_verified === "approved";
                    const effectivePaymentProof = t.payment_proof?.url || null;

                    results.push({
                        event_id: t.competition_id,
                        payment_verification: isVerified ? "accepted" : (t.is_verified === "rejected" ? "rejected" : "pending"),
                        payment_proof: effectivePaymentProof,
                        has_payment_proof: Boolean(effectivePaymentProof),
                        event: {
                            id: t.competition?.id || t.competition_id,
                            slug: t.competition?.slug || (cId.includes("bootcamp") ? "bootcamp" : t.competition_id),
                            title: t.competition?.title || (cId.includes("bootcamp") ? "Bootcamp Artificial Intelligence" : t.competition_id),
                            price: t.competition?.price,
                            whatsapp_group_link: isVerified ? (t.competition?.whatsapp_group_link || null) : null,
                        },
                    });
                }
            }
        }

        res.status(200).json(results);
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
            message: err.message || "Failed to register user into bootcamp",
        });
    }
};

const checkIPBOrMinetodayController = async (req, res) => {
    try {
        const user_id = req.user.id;
        // 1. Check if user's institution or email is 'IPB'
        const user = await prisma.user.findUnique({
            where: { id: user_id },
            select: { email: true, nama_sekolah: true, is_registration_complete: true },
        });
        const namaSekolah = user?.nama_sekolah?.toLowerCase() || "";
        const email = user?.email?.toLowerCase() || "";
        const isIPB = /(ipb|institut pertanian bogor)/i.test(namaSekolah) || /(@(apps\.)?ipb\.ac\.id)$/i.test(email);

        // 2. Check if user is registered to 'minetoday' competition (as team member)
        const minetodTeamMember = await prisma.team_member.findFirst({
            where: {
                user_id,
                team: {
                    OR: [
                        { competition_id: { in: ["MineToday", "minetoday", "mine-today", "MINETODAY"] } },
                        { competition: { slug: { in: ["mine-today", "minetoday"] } } },
                        { competition: { title: { contains: "Mine" } } },
                    ],
                },
            },
            include: {
                team: {
                    select: {
                        id: true,
                        team_name: true,
                        is_verified: true,
                        is_document_verified: true,
                        payment_proof_id: true,
                    },
                },
            },
        });

        let isRegisteredToMinetoday = Boolean(minetodTeamMember);
        let paymentVerification = minetodTeamMember?.team?.is_verified || null;
        let paymentStatus =
            minetodTeamMember?.team?.is_verified === "approved" ||
            minetodTeamMember?.team?.is_verified === "verified";

        // Fallback check if user is registered in event_participant for minetoday
        if (!isRegisteredToMinetoday) {
            const minetodayEvent = await prisma.event.findFirst({
                where: {
                    OR: [
                        { id: { in: ["MineToday", "minetoday", "mine-today", "MINETODAY"] } },
                        { title: { contains: "Mine Today" } },
                        { slug: { in: ["mine-today", "minetoday"] } },
                    ],
                },
                select: { id: true },
            });
            if (minetodayEvent) {
                const participant = await prisma.event_participant.findFirst({
                    where: { user_id, event_id: minetodayEvent.id },
                    select: { payment_verification: true },
                });
                if (participant) {
                    isRegisteredToMinetoday = true;
                    paymentVerification = participant.payment_verification;
                    paymentStatus = participant.payment_verification === "accepted";
                }
            }
        }

        const isMineTodayPaymentVerified = Boolean(paymentStatus);
        const isMineTodayDataVerified = Boolean(
            minetodTeamMember?.is_verified === true ||
            minetodTeamMember?.team?.is_document_verified === "approved"
        );

        res.status(200).json({
            isIPB,
            isRegisteredToMinetoday,
            paymentVerification,
            paymentStatus,
            isMineTodayPaymentVerified,
            isMineTodayDataVerified,
            minetodayTeam: minetodTeamMember?.team || null,
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

