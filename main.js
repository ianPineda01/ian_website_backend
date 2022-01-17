const express = require("express");
const app = express();
const path = require('path')
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'dist.html'))
});

app.post("/:name", (req, res) => {
    res.json({ username: req.params.name});
});