const { PrismaClient } = require("./prisma/app/generated/prisma/client/client.js");
const argon2 = require("argon2");
const prisma = new PrismaClient();

async function updateAllPasswords() {
    const users = [
        { email: 'superadmin@ittoday.id', password: 'superadmin' },
        { email: 'admin@ittoday.id', password: 'admin' },
        { email: 'panitia@ittoday.id', password: 'panitia' },
        { email: 'panitia.uxtoday@ittoday.id', password: 'panitia' },
        { email: 'panitia.itbrains@ittoday.id', password: 'panitia' },
        { email: 'panitia.gametoday@ittoday.id', password: 'panitia' },
        { email: 'panitia.seminar@ittoday.id', password: 'panitia' },
        { email: 'panitia.exhibition@ittoday.id', password: 'panitia' },
        { email: 'peserta1@gmail.com', password: 'password' },
    ];

    for (const user of users) {
        const hash = await argon2.hash(user.password);
        await prisma.user_identity.update({
            where: { email: user.email },
            data: { hash: hash },
        });
        console.log(`Updated: ${user.email}`);
    }
    console.log('All users updated!');
}

updateAllPasswords()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
