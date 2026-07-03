const prisma = require("../prisma.js");

/**
 * Controller to fetch all available events (without teams, participants, or announcements)
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const fetchHalamanKompetisiEvent = async (req, res) => {
    try {
        const events = await prisma.event.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                guide_book_url: true,
                type: true,
                participation_type: true,
                contact_person1: true,
                contact_person2: true,
                method: true,
                max_noncompetition_participant: true,
                logo_url: true,
                // Exclude: teams, participants, announcements, submissions, timelines
            },
        });

        const formattedEvents = events.map(event => ({
            ...event,
            contact_person1: event.contact_person1,
            contact_person2: event.contact_person2,
        }));

        return res.status(200).json(formattedEvents);
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    fetchHalamanKompetisiEvent,
};
