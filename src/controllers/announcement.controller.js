const prisma = require("../prisma.js");

exports.getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await prisma.event_announcement.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                created_at: true,
                updated_at: true,
                competition: {
                    select: {
                        id: true,
                        title: true
                    }
                },
                author: {
                    select: {
                        id: true,
                        full_name: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        res.json({
            success: true,
            data: announcements
        });
    } catch (error) {
        console.error("Error fetching announcements:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch announcements",
            error: error.message
        });
    }
}; 