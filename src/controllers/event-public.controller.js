const prisma = require("../prisma.js");

const parseLocalDate = (dateStr) => {
    if (!dateStr) return null;
    const str = typeof dateStr === 'string' ? dateStr : dateStr.toISOString();
    let cleaned = str.replace(' ', 'T');
    if (cleaned.endsWith('Z')) {
        cleaned = cleaned.slice(0, -1);
    }
    if (!cleaned.includes('+') && !cleaned.match(/-\d{2}:\d{2}$/)) {
        cleaned += '+07:00';
    }
    return new Date(cleaned);
};

const checkAndApplyAutoClose = (event) => {
    if (!event.timelines) return;
    const regTimeline = event.timelines.find(t => t.is_registration === true || t.is_registration === 1);
    if (!regTimeline) return;

    const now = new Date();
    const startDate = regTimeline.end_date ? parseLocalDate(regTimeline.date) : null;
    const deadline = regTimeline.end_date ? parseLocalDate(regTimeline.end_date) : parseLocalDate(regTimeline.date);

    let shouldBeActive = true;
    if (startDate && now < startDate) {
        shouldBeActive = false;
    } else if (deadline && now > deadline) {
        shouldBeActive = false;
    }

    if (event.is_active !== shouldBeActive) {
        event.is_active = shouldBeActive;
        prisma.event.update({
            where: { id: event.id },
            data: { is_active: shouldBeActive }
        }).catch(err => console.error(`Error auto-syncing event ${event.id}:`, err));
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
                max_member: true,
                requires_submission: true,
                is_active: true,
                guide_book_url: true,
                logo_url: true,
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
                max_member: true,
                requires_submission: true,
                is_active: true,
                guide_book_url: true,
                logo_url: true,
                submission_fields: true,
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
