require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const timelines = await prisma.event_timeline.findMany({
        where: { event: { type: 'competition' } },
        include: { event: { select: { title: true } } }
    });
    console.log(JSON.stringify(timelines, null, 2));
}
main().catch(console.error).finally(() => prisma.$disconnect());
