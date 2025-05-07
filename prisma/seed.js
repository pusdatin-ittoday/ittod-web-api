const { PrismaClient } = require('../prisma/app/generated/prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create IT-TODAY 2025 event
    const event1 = await prisma.event.create({
        data: {
            id: 'event-1',
            title: 'IT-TODAY 2025',
            description: 'Kompetisi IT tahunan untuk mahasiswa',
            guide_book_url: 'https://example.com/guide1',
            type: 'competition',
            contact_person1: 'Budi Santoso',
            contact_person2: 'Ani Wijaya',
            max_noncompetition_participant: 100
        }
    });

    // Create Workshop event
    const event2 = await prisma.event.create({
        data: {
            id: 'event-2',
            title: 'Workshop IT-TODAY 2025',
            description: 'Workshop teknologi terkini untuk mahasiswa',
            guide_book_url: 'https://example.com/guide2',
            type: 'non_competition',
            contact_person1: 'Dewi Putri',
            max_noncompetition_participant: 50
        }
    });

    // Create timelines for IT-TODAY 2025
    await prisma.event_timeline.createMany({
        data: [
            {
                id: 'timeline-1',
                event_id: 'event-1',
                title: 'Pembukaan Pendaftaran',
                date: new Date('2025-01-01T00:00:00Z')
            },
            {
                id: 'timeline-2',
                event_id: 'event-1',
                title: 'Batas Akhir Pendaftaran Early Bird',
                date: new Date('2025-02-01T00:00:00Z')
            },
            {
                id: 'timeline-3',
                event_id: 'event-1',
                title: 'Batas Akhir Pendaftaran',
                date: new Date('2025-03-01T00:00:00Z')
            },
            {
                id: 'timeline-4',
                event_id: 'event-1',
                title: 'Technical Meeting',
                date: new Date('2025-03-15T00:00:00Z')
            },
            {
                id: 'timeline-5',
                event_id: 'event-1',
                title: 'Hari Kompetisi',
                date: new Date('2025-04-01T00:00:00Z')
            }
        ]
    });

    // Create timelines for Workshop
    await prisma.event_timeline.createMany({
        data: [
            {
                id: 'timeline-6',
                event_id: 'event-2',
                title: 'Pembukaan Pendaftaran Workshop',
                date: new Date('2025-01-15T00:00:00Z')
            },
            {
                id: 'timeline-7',
                event_id: 'event-2',
                title: 'Workshop Hari 1',
                date: new Date('2025-03-15T00:00:00Z')
            },
            {
                id: 'timeline-8',
                event_id: 'event-2',
                title: 'Workshop Hari 2',
                date: new Date('2025-03-16T00:00:00Z')
            }
        ]
    });

    console.log('Database has been seeded!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 