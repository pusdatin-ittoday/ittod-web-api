const app = require("./app.js");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Keep process active in non-interactive / background execution environments
setInterval(() => {}, 1000 * 60 * 60);
