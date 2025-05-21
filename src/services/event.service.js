const prisma = require("../prisma.js");

const registerUserIntoEvent = async (
    user_id,
    event_id,
    institution_name,
    phone_number
) => {
    const userAlreadyInEvent = await prisma.event_participant.findFirst({
        where: {
            user_id,
            event_id,
        },
    });

    const eventExists = await prisma.event.findFirst({
        where: {
            id: event_id,
        },
    });

    if (!eventExists) {
        throw {
            status: 404,
            message: `There's no event with event_id ${event_id}`,
        };
    }
    if (userAlreadyInEvent) {
        throw {
            status: 403,
            message: "You already registered in this event!",
        };
    }

    try {
        await prisma.$transaction(async tx => {
            await tx.user.update({
                where: {
                    id: user_id,
                },
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
            message: `User have been registered into event with id ${event_id}`,
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
