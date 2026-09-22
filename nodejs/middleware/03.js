const express = require("express");

const app = express();


function validateStudentId(req, res, next) {

    const id = req.params.id;

    if (!/^\d+$/.test(id)) {

        return res.status(400).send(
            "Invalid student ID. ID must contain numbers only."
        );

    }

    next();

}


app.get(
    "/student/:id",
    validateStudentId,
    (req, res) => {

        res.send(
            "Valid Student ID: " +
            req.params.id
        );

    }
);


app.listen(3023, () => {

    console.log(
        "Middleware 03 running at http://localhost:3023"
    );

});