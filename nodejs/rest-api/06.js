const express = require("express");

const app = express();

app.use(express.json());


let students = [
    {
        id: 1,
        name: "Student 1",
        course: "BTech"
    }
];


app.get("/students", (req, res) => {

    res.json(students);

});


app.post("/students", (req, res) => {

    const student = {

        id: students.length + 1,

        name: req.body.name,

        course: req.body.course

    };

    students.push(student);

    res.status(201).json(student);

});


app.listen(3076, () => {

    console.log(
        "REST API 06 running at http://localhost:3076"
    );

});