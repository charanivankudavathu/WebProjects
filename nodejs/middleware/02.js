const express = require("express");

const app = express();


function logger(req, res, next) {

    const currentTime =
        new Date().toLocaleString();

    console.log(
        `[${currentTime}] ${req.method} ${req.url}`
    );

    next();

}


app.use(logger);


app.get("/", (req, res) => {

    res.send(
        "Logging middleware executed successfully."
    );

});


app.get("/about", (req, res) => {

    res.send(
        "About page"
    );

});


app.listen(3022, () => {

    console.log(
        "Middleware 02 running at http://localhost:3022"
    );

});