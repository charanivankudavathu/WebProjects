const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Express Experiment 01: Basic Express Application");
});

app.listen(3001, () => {
    console.log(
        "Express 01 running at http://localhost:3001"
    );
});