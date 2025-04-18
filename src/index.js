const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

require('./server');

app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;

        //const newUser = await prisma.user.create({
        //    data: { name, email },
        //});
        //res.json(newUser);
    
        
        // First, create the auth user
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password: 'password'
        });

        if (authError) {
            console.error('Auth error:', authError);
            return res.status(500).json({ error: 'Error signing up' });
        }

        // Then, create the user profile
        const { data: userData, error: userError } = await supabase
            .from('users')
            .insert([
                {
                    email,
                    full_name: name,
                    auth_id: authData.user.id
                }
            ])
            .select();

        if (userError) {
            console.error('User data error:', userError);
            return res.status(500).json({ error: 'Error storing user data' });
        }

        // Return the first user from the array
        res.json(userData[0]);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
