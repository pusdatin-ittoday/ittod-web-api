const http = require('http');

const data = JSON.stringify({
    email: 'peserta1@gmail.com',
    password: 'password'
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/auth/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        console.log('Status:', res.statusCode);
        console.log('Response:', body);
    });
});

req.on('error', (e) => {
    console.error('Error:', e.message);
    console.log('Is server running? Make sure to run "npm run dev" in ittod-web-api folder.');
});

req.write(data);
req.end();
