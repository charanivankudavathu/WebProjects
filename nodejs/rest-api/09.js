const express = require("express");

const app = express();

app.use(express.json());


let students = [

    {
        id: 1,
        name: "Student",
        course: "BTech"
    }

];


app.put("/students/:id", (req, res) => {

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


    student.name =
        req.body.name || student.name;

    student.course =
        req.body.course || student.course;


    res.status(200).json({

        message:
            "Student updated successfully.",

        student: student

    });

});


app.patch("/students/:id", (req, res) => {

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


    Object.assign(
        student,
        req.body
    );


    res.status(200).json(student);

});


app.listen(3079, () => {

    console.log(
        "REST API 09 running at http://localhost:3079"
    );

});