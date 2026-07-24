const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const events = await prisma.event.findMany();
  for (const event of events) {
    if (!event.slug) {
      const slug = event.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
      await prisma.event.update({
        where: { id: event.id },
        data: { slug }
      });
      console.log('Updated', event.title, 'to slug', slug);
    }
  }
}

run().then(() => prisma.$disconnect());
