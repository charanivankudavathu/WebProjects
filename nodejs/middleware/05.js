const express = require("express");

const app = express();


app.get("/", (req, res) => {

    res.send(
        "Middleware 05: Error Handling Demo"
    );

});


app.get("/error", (req, res, next) => {

    const error =
        new Error(
            "Something went wrong in the application."
        );

    next(error);

});


app.use((err, req, res, next) => {

    console.error(err.message);

    res.status(500).send(
        "Error handled successfully: " +
        err.message
    );

});


app.listen(3025, () => {

    console.log(
        "Middleware 05 running at http://localhost:3025"
    );

});