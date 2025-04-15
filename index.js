const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
        data: { name, email },
    });
    res.json(newUser);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
