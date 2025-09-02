const { createTimelineService } = require("../services/admin-timeline.service");

const createTimeline = async (req, res) => {
    try {
        const { event_id, title, date } = req.body;

        // Validate required fields with proper checks
        if (!event_id || !title || !date) {
            return res.status(400).json({
                success: false,
                message: "event_id, title, and date are required",
            });
        }

        // Validate string fields are not empty or whitespace-only
        if (typeof event_id !== "string" || event_id.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "event_id must be a non-empty string",
            });
        }

        if (typeof title !== "string" || title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "title must be a non-empty string",
            });
        }

        // Validate title length
        if (title.trim().length > 500) {
            return res.status(400).json({
                success: false,
                message: "title must be less than 500 characters",
            });
        }

        // Validate date format
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({
                success: false,
                message: "Invalid date format",
            });
        }

        const result = await createTimelineService({
            event_id: event_id.trim(),
            title: title.trim(),
            date: parsedDate,
        });

        res.status(201).json({
            success: true,
            message: "Timeline created successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error creating timeline:", error);

        // Handle Prisma foreign key constraint violation
        if (error.code === "P2003") {
            return res.status(400).json({
                success: false,
                message: "Event not found",
            });
        }

        // Handle custom business logic errors
        if (error.message === "Event not found") {
            return res.status(400).json({
                success: false,
                message: "Event not found",
            });
        }

        if (error.message === "Duplicate timeline title for this event") {
            return res.status(409).json({
                success: false,
                message:
                    "A timeline with this title already exists for this event",
            });
        }

        if (
            error.message ===
            "Maximum number of timelines (20) reached for this event"
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Maximum number of timelines (20) reached for this event",
            });
        }

        // Security: Don't expose internal error details to client
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { createTimeline };
