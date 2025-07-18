const prisma = require("../prisma.js");

exports.registerUserIntoBootcamp = async ({
    event_id,
    user_id,
    institution_name,
    phone_number,
    bundling,
}) => {
    if (event_id !== "bootcamp") {
        throw {
            status: 400,
            message: "Bootcamp only!",
        };
    }

    const alreadyRegistered = await prisma.event_participant.findFirst({
        where: {
            user_id,
            event_id,
        },
    });

    if (alreadyRegistered) {
        throw {
            status: 403,
            message: "User already registered in the bootcamp!",
        };
    }

    try {
        await prisma.$transaction(async tx => {
            // --- INSIDE THE TRANSACTION ---

            const lockedEventArr = await tx.$queryRaw`
                SELECT max_noncompetition_participant
                FROM event
                WHERE id = ${event_id}
                    FOR UPDATE
            `;
            const lockedEvent = lockedEventArr[0] || {};

            const eventParticipantCount = await tx.event_participant.count({
                where: { event_id },
            });

            const isEventFull =
                lockedEvent.max_noncompetition_participant !== null &&
                eventParticipantCount >= lockedEvent.max_noncompetition_participant;

            if (isEventFull) {
                throw {
                    status: 403,
                    message: "Bootcamp is full. Registration is not allowed.",
                };
            }

            await tx.user.update({
                where: { id: user_id },
                data: {
                    nama_sekolah: institution_name,
                    phone_number,
                },
            });

            const userData = await tx.user.findFirst({
                where: { id: user_id },
                select: {
                    nama_sekolah: true,
                    is_registration_complete: true,
                },
            });

            const isMinetodArr = await tx.$queryRaw`
                SELECT t.is_verified
                FROM team_member tm
                         JOIN team t ON tm.team_id = t.id
                WHERE tm.user_id = ${user_id}
                  AND t.competition_id = 'minetoday'
                  AND t.is_verified = 1
            `;
            const isMinetod = isMinetodArr.length > 0;

            const namaSekolah = userData.nama_sekolah || "";
            const canBeFree =
                isMinetod ||
                ((namaSekolah.toLowerCase().includes("ipb") ||
                    namaSekolah.toLowerCase().includes("institut pertanian bogor")) &&
                    userData.is_registration_complete === true);

            await tx.event_participant.create({
                data: {
                    user_id,
                    event_id,
                    bundling,
                    paid_for_user: !canBeFree, // true if NOT free, false if free
                    date_added: new Date(),
                },
            });
        });
    } catch (e) {
        console.error("Registration error:", e);
        throw {
            status: 500,
            message: "Failed to register user into bootcamp.",
            error: e.message,
        };
    }
};