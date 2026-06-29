const { PrismaClient } = require('./prisma/app/generated/prisma/client/client.js');

async function debug() {
    console.log('Creating PrismaClient...');
    const prisma = new PrismaClient();
    
    try {
        console.log('Fetching user...');
        const user = await prisma.user_identity.findUnique({
            where: { email: 'peserta1@gmail.com' }
        });
        
        if (!user) {
            console.log('User not found!');
            return;
        }
        
        console.log('User found:', user.email);
        console.log('Hash:', user.hash ? user.hash.substring(0, 30) + '...' : 'NULL');
        console.log('Role:', user.role);
        console.log('is_verified:', user.is_verified);
        console.log('Hash type:', typeof user.hash);
        
        // Test argon2
        const argon2 = require('argon2');
        const valid = await argon2.verify(user.hash, 'password');
        console.log('Password valid:', valid);
        
    } catch (err) {
        console.error('Error:', err.message);
        console.error('Stack:', err.stack);
    } finally {
        await prisma.$disconnect();
    }
}

debug();
