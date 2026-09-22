const express = require("express");

const app = express();

app.use(express.json());


let students = [];


app.post("/students", (req, res) => {

    const {
        name,
        course
    } = req.body;


    const student = {

        id:
            students.length + 1,

        name: name,

        course: course

    };


    students.push(student);


    res.status(201).json({

        message:
            "Student created successfully.",

        student: student

    });

});


app.listen(3078, () => {

    console.log(
        "REST API 08 running at http://localhost:3078"
    );

});