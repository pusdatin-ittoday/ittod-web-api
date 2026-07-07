const prisma = require("../prisma.js");

exports.getAllTimelines = async (req, res) => {
    try {
        const timelines = await prisma.event_timeline.findMany({
            include: {
                event: false,
            },
            orderBy: {
                date: "asc",
            },
        });
        res.status(200).json(timelines);
    } catch (err) {
        console.error("Error fetching timelines:", err);
        res.status(500).json({ error: "Failed to fetch timelines" });
    }
};

exports.getTimelineByEventId = async (req, res) => {
    try {
        const { eventId } = req.params;

        const timelines = await prisma.event_timeline.findMany({
            where: {
                event_id: eventId,
            },
            include: {
                event: false,
            },
            orderBy: {
                date: "asc",
            },
        });
        res.status(200).json(timelines);
    } catch (err) {
        console.error(
            `Error fetching timelines for event ${req.params.eventId}:`,
            err
        );
        res.status(500).json({
            error: "Failed to fetch timelines for this event",
        });
    }
};

exports.getCompetitionTimelines = async (req, res) => {
    try {
        const timelines = await prisma.event_timeline.findMany({
            where: {
                event: {
                    type: "competition",
                },
            },
            orderBy: {
                date: "asc",
            },
        });

        // Map database fields to the structure expected by the frontend (start_date/end_date)
        const formatted = timelines.map((t) => ({
            id: t.id,
            event_id: t.event_id,
            title: t.title,
            start_date: t.date,
            end_date: null,
        }));

        res.status(200).json(formatted);
    } catch (err) {
        console.error("Error fetching competition timelines:", err);
        res.status(500).json({ error: "Failed to fetch competition timelines" });
    }
};
