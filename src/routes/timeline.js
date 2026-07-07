const { Router } = require("express");
const {
    getAllTimelines,
    getTimelineByEventId,
    getCompetitionTimelines,
} = require("../controllers/timeline.controller.js");

const timelineRouter = Router();

// Get all timelines
timelineRouter.get("/api/timeline", getAllTimelines);

// Get all competition timelines (used by frontend)
timelineRouter.get("/api/competition-timeline", getCompetitionTimelines);

// Get timeline by event ID
timelineRouter.get("/api/timeline/:eventId", getTimelineByEventId);

module.exports = timelineRouter;
