const express = require("express");

const app = express();


app.use((req, res, next) => {

    console.log(
        "Middleware 1 executed"
    );

    next();

});


app.use((req, res, next) => {

    console.log(
        "Middleware 2 executed"
    );

    next();

});


app.use((req, res, next) => {

    console.log(
        "Middleware 3 executed"
    );

    next();

});


app.get("/", (req, res) => {

    console.log(
        "Route handler executed"
    );

    res.send(
        "All middleware executed in order."
    );

});


app.listen(3026, () => {

    console.log(
        "Middleware 06 running at http://localhost:3026"
    );

});