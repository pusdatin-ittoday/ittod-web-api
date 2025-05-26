const prisma = require("../prisma");

const events = [{}, {}, {}];
const timelines = [{}];
const initiateDatabase = async (req, res) => {
    const eventResult = await prisma.event.createMany({
        data: events,
    });
    const timelineResult = await prisma.event_timeline.createMany({
        data: timelines,
    });

    const results = {
        eventResult,
        timelineResult,
        message: "dont run this ever again bro...",
    };
    res.json(results);
};

module.exports = { initiateDatabase };
