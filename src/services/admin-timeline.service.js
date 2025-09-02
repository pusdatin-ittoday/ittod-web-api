const prisma = require("../prisma.js");
const crypto = require("crypto");

const createTimelineService = async ({ event_id, title, date }) => {
    try {
        // Generate UUID for the timeline ID
        const id = crypto.randomUUID();

        // Check if event exists
        const event = await prisma.event.findUnique({
            where: { id: event_id },
        });

        if (!event) {
            throw new Error("Event not found");
        }

        // Check for duplicate timeline title for the same event
        const existingTimeline = await prisma.event_timeline.findFirst({
            where: {
                event_id: event_id,
                title: title,
            },
        });

        if (existingTimeline) {
            throw new Error("Duplicate timeline title for this event");
        }

        // Create the timeline
        const timeline = await prisma.event_timeline.create({
            data: {
                id,
                event_id,
                title,
                date,
            },
            include: {
                event: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
        });

        return timeline;
    } catch (error) {
        console.error("Error in createTimelineService:", error);
        throw error;
    }
};

module.exports = { createTimelineService };
