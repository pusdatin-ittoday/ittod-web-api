const { PrismaClient } = require("./prisma/app/generated/prisma/client/client.js");
const prisma = new PrismaClient();

async function updatePassword() {
    const argon2Hash = '$argon2id$v=19$m=4096,t=3,p=1$/ZJrhAu62gszyxCuR4RnfA$YwCY87F+R8iS/qSJXmXvn1Ecp7/a2y373uGzht9z0o4';
    
    const user = await prisma.user_identity.update({
        where: { email: 'superadmin@ittoday.id' },
        data: { hash: argon2Hash },
    });
    
    console.log('Updated user:', user.email);
}

updatePassword()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
