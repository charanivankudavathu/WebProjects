const express = require("express");

const app = express();


function authenticate(req, res, next) {

    const token = req.query.token;

    if (token !== "12345") {

        return res.status(401).send(
            "Unauthorized. Valid authentication token required."
        );

    }

    next();

}


app.get(
    "/protected",
    authenticate,
    (req, res) => {

        res.send(
            "Authentication successful. Welcome to the protected route."
        );

    }
);


app.listen(3024, () => {

    console.log(
        "Middleware 04 running at http://localhost:3024"
    );

});