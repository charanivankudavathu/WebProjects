const express = require("express");

const app = express();


const students = [

    {
        id: 1,
        name: "Charani",
        course: "BTech"
    },

    {
        id: 2,
        name: "Student 2",
        course: "BTech"
    }

];


app.get("/students", (req, res) => {

    res.status(200).json({

        count: students.length,

        students: students

    });

});


app.get("/students/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const student =
        students.find(
            item => item.id === id
        );


    if (!student) {

        return res.status(404).json({
            message: "Student not found."
        });

    }


    res.status(200).json(student);

});


app.listen(3077, () => {

    console.log(
        "REST API 07 running at http://localhost:3077"
    );

});