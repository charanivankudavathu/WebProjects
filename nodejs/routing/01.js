const express = require("express");

const app = express();


app.get("/", (req, res) => {

    res.send(
        "Routing Experiment 01: Home Page"
    );

});


app.get("/about", (req, res) => {

    res.send(
        "Routing Experiment 01: About Page"
    );

});


app.get("/contact", (req, res) => {

    res.send(
        "Routing Experiment 01: Contact Page"
    );

});


app.listen(3011, () => {

    console.log(
        "Routing 01 running at http://localhost:3011"
    );

});