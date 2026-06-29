const argon2 = require('argon2');

async function generateHash() {
    const password = 'superadmin';
    const hash = await argon2.hash(password);
    console.log('Argon2 hash for "superadmin":');
    console.log(hash);
}

generateHash();
