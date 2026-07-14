require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const timelines = await prisma.$queryRawUnsafe(`SELECT * FROM competition_timeline`);
    console.log(JSON.stringify(timelines, null, 2));
}
main().catch(console.error).finally(() => prisma.$disconnect());
