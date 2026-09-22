const express = require("express");

const app = express();

app.use(express.json());


let students = [
    {
        id: 1,
        name: "Charani",
        course: "BTech",
        semester: 3
    }
];


app.get("/", (req, res) => {

    res.send(`
        <h1>Student Management CRUD</h1>

        <p>
            Use the following API endpoints:
        </p>

        <ul>
            <li>GET /students</li>
            <li>POST /students</li>
            <li>PUT /students/:id</li>
            <li>DELETE /students/:id</li>
        </ul>
    `);

});


app.get("/students", (req, res) => {

    res.json(students);

});


app.post("/students", (req, res) => {

    const student = {

        id:
            students.length === 0
                ? 1
                : students[students.length - 1].id + 1,

        name: req.body.name,

        course: req.body.course,

        semester: req.body.semester

    };


    students.push(student);

    res.status(201).json(student);

});


app.put("/students/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const student =
        students.find(
            item => item.id === id
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

    student.semester =
        req.body.semester || student.semester;


    res.json(student);

});


app.delete("/students/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const index =
        students.findIndex(
            item => item.id === id
        );


    if (index === -1) {

        return res.status(404).json({
            message: "Student not found"
        });

    }


    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });

});


app.listen(3052, () => {

    console.log(
        "CRUD 02 running at http://localhost:3052"
    );

});