const { Router } = require("express");
const { getAllTimelines, getTimelineByEventId } = require("../controllers/timeline.controller.js");

const timelineRouter = Router();

// Get all timelines
timelineRouter.get("/api/timeline", getAllTimelines);

// Get timeline by event ID
timelineRouter.get("/api/timeline/:eventId", getTimelineByEventId);

module.exports = timelineRouter; 