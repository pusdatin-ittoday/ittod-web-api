const prisma = require("../prisma.js");

const getEventsController = async (req, res) => {
    try {
        const { type } = req.query; // 'competition' or 'non_competition'

        const filter = {};
        if (type) {
            filter.type = type;
        }

        const events = await prisma.event.findMany({
            where: filter,
            select: {
                id: true,
                title: true,
                description: true,
                type: true,
                price: true,
                contact_person1: true,
                contact_person2: true,
                max_noncompetition_participant: true,
                requires_submission: true,
                is_active: true,
                guide_book_url: true,
                participation_type: true,
                logo_url: true,
                whatsapp_group_link: true,
                timelines: {
                    orderBy: {
                        date: 'asc'
                    }
                }
            }
        });

        return res.status(200).json({ success: true, data: events });
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

const getEventByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await prisma.event.findUnique({
            where: { id },
            select: {
                id: true,
                title: true,
                description: true,
                type: true,
                price: true,
                contact_person1: true,
                contact_person2: true,
                max_noncompetition_participant: true,
                requires_submission: true,
                is_active: true,
                guide_book_url: true,
                participation_type: true,
                logo_url: true,
                whatsapp_group_link: true,
                timelines: {
                    orderBy: {
                        date: 'asc'
                    }
                }
            }
        });

        if (!event) {
            return res.status(404).json({ success: false, error: "Event not found" });
        }

        return res.status(200).json({ success: true, data: event });
    } catch (error) {
        console.error("Error fetching event by id:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = {
    getEventsController,
    getEventByIdController
};
