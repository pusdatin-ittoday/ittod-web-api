const prisma = require("./src/prisma.js");

async function main() {
    try {
        const events = await prisma.event.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                type: true,
                price: true,
                contact_person1: true,
                contact_person2: true,
                max_noncompetition_participant: true,
                requires_submission: true,
                is_active: true,
                guide_book_url: true,
                timelines: {
                    orderBy: {
                        date: 'asc'
                    }
                }
            }
        });
        console.log(events);
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}
main();
