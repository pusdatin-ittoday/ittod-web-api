const {
    PrismaClient
} = require("../prisma/app/generated/prisma/client/client.js");

const prisma = new PrismaClient();

module.exports = prisma;
