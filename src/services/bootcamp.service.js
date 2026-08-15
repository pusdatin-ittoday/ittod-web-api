const prisma = require("../prisma.js");

exports.registerUserIntoBootcamp = async ({
    event_id,
    user_id,
    institution_name,
    phone_number,
    bundling,
}) => {
    if (!event_id || !event_id.toLowerCase().includes("bootcamp")) {
        throw {
            status: 400,
            message: "Bootcamp only!",
        };
    }

    // Resolve actual event record from DB (case-insensitive or by slug)
    const targetEvent = await prisma.event.findFirst({
        where: {
            OR: [
                { id: { in: ["Bootcamp", "bootcamp", "BOOTCAMP"] } },
                { slug: { in: ["bootcamp", "Bootcamp"] } },
                { title: { contains: "Bootcamp" } },
            ],
        },
    });

    const resolvedEventId = targetEvent ? targetEvent.id : "Bootcamp";

    const alreadyRegistered = await prisma.event_participant.findFirst({
        where: {
            user_id,
            event_id: resolvedEventId,
        },
    });

    if (alreadyRegistered) {
        // Safe idempotent return if already registered
        return {
            message: "User already registered in the bootcamp!",
            event_participant: alreadyRegistered,
        };
    }

    try {
        return await prisma.$transaction(async tx => {
            // --- INSIDE THE TRANSACTION ---
            const lockedEvent = await tx.event.findUnique({
                where: { id: resolvedEventId },
                select: { max_noncompetition_participant: true },
            });

            const eventParticipantCount = await tx.event_participant.count({
                where: { 
                    event_id: resolvedEventId,
                    payment_verification: { in: ['pending', 'accepted'] }
                },
            });

            const isEventFull =
                lockedEvent?.max_noncompetition_participant !== null &&
                lockedEvent?.max_noncompetition_participant !== undefined &&
                eventParticipantCount >=
                    lockedEvent.max_noncompetition_participant;

            if (isEventFull) {
                throw {
                    status: 403,
                    message: "Bootcamp is full. Registration is not allowed.",
                };
            }

            const updateData = {};
            if (institution_name) updateData.nama_sekolah = institution_name;
            if (phone_number) updateData.phone_number = phone_number;

            if (Object.keys(updateData).length > 0) {
                await tx.user.update({
                    where: { id: user_id },
                    data: updateData,
                });
            }

            const userData = await tx.user.findFirst({
                where: { id: user_id },
                select: {
                    email: true,
                    nama_sekolah: true,
                    is_registration_complete: true,
                },
            });

            const minetodMember = await tx.team_member.findFirst({
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
            });
            const isMinetod = !!minetodMember;

            const namaSekolah = userData?.nama_sekolah || "";
            const userEmail = userData?.email || "";
            const isIPB =
                namaSekolah.toLowerCase().includes("ipb") ||
                namaSekolah.toLowerCase().includes("institut pertanian bogor") ||
                /@(apps\.)?ipb\.ac\.id$/i.test(userEmail);
            const canBeFree = isIPB;

            const newParticipant = await tx.event_participant.create({
                data: {
                    user_id,
                    event_id: resolvedEventId,
                    payment_verification: canBeFree ? "accepted" : "pending",
                    date_added: new Date(),
                },
            });

            return {
                message: "Successfully registered into bootcamp!",
                event_participant: newParticipant,
            };
        });
    } catch (e) {
        console.error("Registration error:", e);
        if (e.status) {
            throw e;
        }
        throw {
            status: 500,
            message: e.message || "Failed to register user into bootcamp.",
        };
    }
};
