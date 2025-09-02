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
                contact_person1: true,
                contact_person2: true,
                max_noncompetition_participant: true,
                // Exclude: teams, participants, announcements, submissions, timelines
            },
        });
        return res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    fetchHalamanKompetisiEvent,
};
