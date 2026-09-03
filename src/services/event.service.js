const prisma = require("../prisma.js");

const registerUserIntoEvent = async (
    user_id,
    event_id,
    institution_name,
    phone_number,
    date_of_birth
) => {
    const eventExists = await prisma.event.findFirst({
        where: { id: event_id },
    });

    if (date_of_birth) {
        await prisma.user.update({
            where: { id: user_id },
            data: { birth_date: new Date(date_of_birth) },
        });
    }

    if (!eventExists) {
        throw {
            status: 404,
            message: `There's no event with event_id ${event_id}`,
        };
    }

    const actualEventId = eventExists.id;

    if (!eventExists.is_active) {
        throw {
            status: 400,
            message: "Pendaftaran untuk kegiatan ini telah ditutup.",
        };
    }

    const regTimeline = await prisma.event_timeline.findFirst({
        where: {
            event_id: actualEventId,
            is_registration: true,
        },
    });

    if (regTimeline) {
        const parseLocalDate = (dateStr) => {
            if (!dateStr) return null;
            const str = typeof dateStr === 'string' ? dateStr : dateStr.toISOString();
            return new Date(str.endsWith('Z') ? str.slice(0, -1) : str);
        };
        const deadline = regTimeline.end_date ? parseLocalDate(regTimeline.end_date) : parseLocalDate(regTimeline.date);
        if (deadline && new Date() > deadline) {
            await prisma.event.update({
                where: { id: actualEventId },
                data: { is_active: false }
            }).catch(() => {});
            throw {
                status: 400,
                message: "Batas waktu pendaftaran untuk kegiatan ini telah berakhir.",
            };
        }
    }

    const userAlreadyInEvent = await prisma.event_participant.findFirst({
        where: { user_id, event_id },
    });

    if (userAlreadyInEvent) {
        throw {
            status: 403,
            message: "You already registered in this event!",
        };
    }

    try {
        await prisma.$transaction(async tx => {
            const lockedEvent = await tx.$queryRaw`
                SELECT max_noncompetition_participant
                FROM event
                WHERE id = ${event_id}
                    FOR UPDATE
            `;

            const maxParticipants = lockedEvent[0]?.max_noncompetition_participant;

            const eventParticipantCount = await tx.event_participant.count({
                where: { 
                    event_id,
                    payment_verification: { in: ['pending', 'accepted'] }
                },
            });

            const isEventFull =
                maxParticipants !== null &&
                eventParticipantCount >= maxParticipants;

            if (isEventFull) {
                throw {
                    status: 403,
                    message: "Event is full. Registration is not allowed.",
                };
            }

            await tx.user.update({
                where: { id: user_id },
                data: {
                    nama_sekolah: institution_name,
                    phone_number,
                },
            });

            await tx.event_participant.create({
                data: {
                    user_id,
                    event_id,
                    date_added: new Date(),
                },
            });
        });

        return {
            message: `User has been registered into event with id ${event_id}`,
        };
    } catch (err) {
        console.error("Registration error:", err);
        throw {
            status: 500,
            message: "Failed to register user into event.",
            error: err.message,
        };
    }
};
module.exports = { registerUserIntoEvent };
