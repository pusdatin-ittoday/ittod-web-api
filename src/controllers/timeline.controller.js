const prisma = require("../prisma.js");

exports.getAllTimelines = async (req, res) => {
    try {
        const timelines = await prisma.event_timeline.findMany({
            include: {
                event: true
            },
            orderBy: {
                date: 'asc'
            }
        });
        res.json(timelines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTimelineByEventId = async (req, res) => {
    try {
        const { eventId } = req.params;
        const timelines = await prisma.event_timeline.findMany({
            where: {
                event_id: eventId
            },
            include: {
                event: true
            },
            orderBy: {
                date: 'asc'
            }
        });
        res.json(timelines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 