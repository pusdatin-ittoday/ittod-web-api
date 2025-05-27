const prisma = require("../prisma.js");

//untuk tampilin data data competition berdasarkan dropdown
const getCompetitionById = async(id) => {
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
                orderBy: { date: 'asc' }
            }
        }
    });

    if (!competition) {
        return null;
    } 

    return competition;
}

//fetch data yang diperlukan untuk ditaro di dropdown
const getCompetitionList = async() => {
    return await prisma.event.findMany({
        where: { type: 'competition' },
        select: { id:true, title: true},
        orderBy: { title: 'asc'},
    });
};

module.exports = { getCompetitionById, getCompetitionList };    