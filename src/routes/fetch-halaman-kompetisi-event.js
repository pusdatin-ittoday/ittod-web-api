const { Router } = require("express");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const {
    fetchHalamanKompetisiEvent,
} = require("../controllers/fetch-halaman-kompetisi-event.controller.js");

const fetchHalamanKompetisiEventRouter = Router();

// List all available events (requires authentication)
fetchHalamanKompetisiEventRouter.get(
    "/api/halaman-kompetisi-event",
    isAuthenticated,
    fetchHalamanKompetisiEvent
);

module.exports = fetchHalamanKompetisiEventRouter;
