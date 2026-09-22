const express = require("express");

const app = express();


app.get("/student/:id", (req, res) => {

    const id = req.params.id;

    res.send(
        "Student ID: " + id
    );

});


app.get("/search", (req, res) => {

    const name = req.query.name;

    const course = req.query.course;

    res.json({

        name: name,

        course: course

    });

});


app.listen(3012, () => {

    console.log(
        "Routing 02 running at http://localhost:3012"
    );

});