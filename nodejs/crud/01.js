const express = require("express");

const app = express();

app.use(express.json());


let students = [
    {
        id: 1,
        name: "Student 1",
        course: "BTech"
    },
    {
        id: 2,
        name: "Student 2",
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


app.put("/students/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const student =
        students.find(
            student => student.id === id
        );


    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }


    student.name =
        req.body.name || student.name;

    student.course =
        req.body.course || student.course;


    res.json(student);

});


app.delete("/students/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const index =
        students.findIndex(
            student => student.id === id
        );


    if (index === -1) {

        return res.status(404).json({
            message: "Student not found"
        });

    }


    const deletedStudent =
        students.splice(index, 1);


    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });

});


app.listen(3051, () => {

    console.log(
        "CRUD 01 running at http://localhost:3051"
    );

});