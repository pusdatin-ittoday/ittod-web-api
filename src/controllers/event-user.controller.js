const prisma = require("../prisma");
const { registerUserIntoEvent } = require("../services/event.service");
const { registerUserIntoBootcamp } = require("../services/bootcamp.service");

const eventJoinController = async (req, res) => {
    try {
        const user_id = req.user.id;
        const { event_id, institution_name, phone_number } = req.body;

        const result = await registerUserIntoEvent(
            user_id,
            event_id,
            institution_name,
            phone_number
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
                event: {
                    select: { title: true },
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

module.exports = {
    eventJoinController,
    eventShowController,
    bootcampRegistrationController,
};
