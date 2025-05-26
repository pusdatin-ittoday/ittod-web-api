const prisma = require("../prisma.js");
const { message } = require('../validators/loginValidationSchema');

const getCompetitionById = async(id) => {
    try{
        const competition = await prisma.event.findFirst({
            where: {
                id: parseInt(id),
                type: 'competition'
            },
            select: {
                id: true,
                title: true,
                description: true,
                guide_book_url: true,
                contact_person1: true,
                contact_person2: true,
                timeline: {
                    select: {
                        id: true,
                        title: true,
                        date: true
                    },
                    orderBy: {
                        date: 'asc'
                    }
                }
            }
        });

        if (!competition) {
            throw {
                status: 404,
                message: `competition id: ${id} not found`
            };
        } 

        return {
            id: competition.id,
            title: competition.title,
            description: competition.description,
            guide_book_url: competition.guide_book_url,
            contact_person1: competition.contact_person1,
            contact_person2: competition.contact_person2,
            timeline: competition.timeline
        };

    } catch (error) {
        
        if (error.status) {
            throw error;
        }

        throw {
            status: 500,
            message: 'Internal Server Error',
            detail : error.message || error
        };
    }
}

module.exports = { getCompetitionById };