const { PrismaClient } = require("./prisma/app/generated/prisma/client/client.js");
const argon2 = require("argon2");
const prisma = new PrismaClient();

async function checkUser() {
    const email = 'peserta1@gmail.com';
    const password = 'password';
    
    const user = await prisma.user_identity.findUnique({
        where: { email: email },
    });
    
    if (!user) {
        console.log('User not found:', email);
        return;
    }
    
    console.log('User found:', user.email);
    console.log('Hash starts with:', user.hash.substring(0, 30));
    console.log('Role:', user.role);
    console.log('is_verified:', user.is_verified);
    
    const valid = await argon2.verify(user.hash, password);
    console.log('Password "password" valid:', valid);
}

checkUser()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
