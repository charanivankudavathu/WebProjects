const express = require("express");

const app = express();


app.get("/", (req, res) => {

    res.send(
        "Routing Experiment 04: Home Page"
    );

});


app.get("/about", (req, res) => {

    res.send(
        "Routing Experiment 04: About Page"
    );

});


app.use((req, res) => {

    res.status(404).send(
        "404 - Page Not Found"
    );

});


app.listen(3014, () => {

    console.log(
        "Routing 04 running at http://localhost:3014"
    );

});