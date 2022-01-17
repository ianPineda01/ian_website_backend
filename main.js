const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(history({index: '/'}));

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post("/", (req, res) => {
    res.json({ message: 'welcome to my server :)'});
});