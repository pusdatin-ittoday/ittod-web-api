async function checkTime() {
    try {
        const res = await fetch('http://localhost:3000/api/competition-timeline');
        const data = await res.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e.message);
    }
}
checkTime();
