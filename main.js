const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
});

app.get('/', (req, res) => {
    res.send("Welcome to my server :D");
});

app.get("/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});