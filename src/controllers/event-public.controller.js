const prisma = require("../prisma.js");

const parseLocalDate = (dateStr) => {
    if (!dateStr) return null;
    const str = typeof dateStr === 'string' ? dateStr : dateStr.toISOString();
    return new Date(str.endsWith('Z') ? str.slice(0, -1) : str);
};

const checkAndApplyAutoClose = (event) => {
    if (!event.is_active || !event.timelines) return;
    const regTimeline = event.timelines.find(t => t.is_registration === true || t.is_registration === 1);
    if (!regTimeline) return;
    const deadline = regTimeline.end_date ? parseLocalDate(regTimeline.end_date) : parseLocalDate(regTimeline.date);
    if (deadline && new Date() > deadline) {
        event.is_active = false;
        prisma.event.update({
            where: { id: event.id },
            data: { is_active: false }
        }).catch(err => console.error(`Error auto-closing event ${event.id}:`, err));
    }
};

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
                slug: true,
                title: true,
                description: true,
                type: true,
                participation_type: true,
                price: true,
                contact_person1: true,
                contact_person2: true,
                method: true,
                max_noncompetition_participant: true,
                requires_submission: true,
                is_active: true,
                guide_book_url: true,
                participation_type: true,
                logo_url: true,
                whatsapp_group_link: true,
                submission_fields: true,
                timelines: {
                    orderBy: {
                        date: 'asc'
                    }
                }
            }
        });

        const formattedEvents = events.map(event => {
            checkAndApplyAutoClose(event);
            return {
                ...event,
                contact_person1: event.contact_person1,
                contact_person2: event.contact_person2,
            };
        });

        return res.status(200).json({ success: true, data: formattedEvents });
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

const getEventByIdController = async (req, res) => {
    try {
        const { id: idOrSlug } = req.params;

        const event = await prisma.event.findFirst({
            where: {
                OR: [
                    { id: idOrSlug },
                    { slug: idOrSlug }
                ]
            },
            select: {
                id: true,
                slug: true,
                title: true,
                description: true,
                type: true,
                participation_type: true,
                price: true,
                contact_person1: true,
                contact_person2: true,
                method: true,
                max_noncompetition_participant: true,
                requires_submission: true,
                is_active: true,
                guide_book_url: true,
                participation_type: true,
                logo_url: true,
                whatsapp_group_link: true,
                submission_fields: true,
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

        checkAndApplyAutoClose(event);

        const formattedEvent = {
            ...event,
            contact_person1: event.contact_person1,
            contact_person2: event.contact_person2,
        };

        return res.status(200).json({ success: true, data: formattedEvent });
    } catch (error) {
        console.error("Error fetching event by id:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = {
    getEventsController,
    getEventByIdController
};
