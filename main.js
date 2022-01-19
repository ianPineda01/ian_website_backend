const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const fs = require('fs').promises;
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(history({index: '/'}));

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}/`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post("/", (req, res) => {
    res.json({ message: 'welcome to my server :)'});
});

app.post("/log_visit", () => {
    fs.readFile('visitor_count.txt', 'utf-8')
    .then(data => parseInt(data))
    .then(data => data + 1)
    .then(data => '' + data)
    .then(data => {
        fs.writeFile('visitor_count.txt', data);
    });
});