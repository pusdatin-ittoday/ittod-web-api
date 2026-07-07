const prisma = require("../prisma.js");

const COMPETITION_TIMELINE_FALLBACK_MESSAGE =
    "Belum ada timeline competition yang tersedia";

const GLOBAL_TIMELINE_TABLE = "timeline_global";

const pickFirstExistingKey = (row, keys) =>
    keys.find(key => Object.prototype.hasOwnProperty.call(row, key));

const formatGlobalTimeline = row => {
    const titleKey = pickFirstExistingKey(row, [
        "title",
        "name",
        "event_name",
        "agenda",
    ]);
    const startDateKey = pickFirstExistingKey(row, [
        "start_date",
        "date",
        "tanggal",
        "created_at",
    ]);
    const endDateKey = pickFirstExistingKey(row, ["end_date", "date_end"]);

    return {
        id:
            row.id?.toString() ??
            `${row[titleKey] ?? "timeline"}-${row[startDateKey] ?? ""}`,
        event_id: null,
        title: row[titleKey] ?? "",
        start_date: row[startDateKey] ?? null,
        end_date: endDateKey ? row[endDateKey] : null,
    };
};

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
        const columns = await prisma.$queryRawUnsafe(
            `SHOW COLUMNS FROM \`${GLOBAL_TIMELINE_TABLE}\``
        );
        const columnNames = columns.map(column => column.Field);
        const orderColumn =
            columnNames.find(column =>
                ["start_date", "date", "tanggal", "created_at"].includes(column)
            ) || columnNames[0];

        const timelines = await prisma.$queryRawUnsafe(
            `SELECT * FROM \`${GLOBAL_TIMELINE_TABLE}\` ORDER BY \`${orderColumn}\` ASC`
        );
        const formatted = timelines.map(formatGlobalTimeline);

        res.set("X-Empty-Message", COMPETITION_TIMELINE_FALLBACK_MESSAGE);
        res.status(200).json(formatted);
    } catch (err) {
        console.error("Error fetching competition timelines:", err);
        res.status(500).json({
            error: COMPETITION_TIMELINE_FALLBACK_MESSAGE,
        });
    }
};
