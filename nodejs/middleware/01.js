const express = require("express");

const app = express();


function customMiddleware(req, res, next) {

    console.log(
        "Custom middleware executed"
    );

    next();

}


app.use(customMiddleware);


app.get("/", (req, res) => {

    res.send(
        "Custom middleware executed successfully."
    );

});


app.listen(3021, () => {

    console.log(
        "Middleware 01 running at http://localhost:3021"
    );

});