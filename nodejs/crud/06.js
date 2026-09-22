const express = require("express");

const app = express();

app.use(express.json());


let students = [];


function validateStudent(req, res, next) {

    const {
        name,
        course,
        semester
    } = req.body;


    if (
        !name ||
        !name.trim()
    ) {

        return res.status(400).json({

            error: "Name is required."

        });

    }


    if (
        !course ||
        !course.trim()
    ) {

        return res.status(400).json({

            error: "Course is required."

        });

    }


    if (
        semester === undefined ||
        semester === null ||
        semester === "" ||
        !Number.isInteger(
            Number(semester)
        )
    ) {

        return res.status(400).json({

            error:
                "Semester must be a valid number."

        });

    }


    next();

}


app.get("/", (req, res) => {

    res.send(`
        <h1>CRUD Input Validation</h1>

        <p>
            Use POST /students to create a student.
        </p>

        <p>
            Required fields:
        </p>

        <ul>
            <li>name</li>
            <li>course</li>
            <li>semester</li>
        </ul>
    `);

});


app.get("/students", (req, res) => {

    res.json(students);

});


app.post(
    "/students",
    validateStudent,
    (req, res) => {

        const student = {

            id:
                students.length === 0
                    ? 1
                    : students[
                        students.length - 1
                    ].id + 1,

            name:
                req.body.name.trim(),

            course:
                req.body.course.trim(),

            semester:
                Number(req.body.semester)

        };


        students.push(student);


        res.status(201).json({

            message:
                "Student created successfully.",

            student: student

        });

    }
);


app.put(
    "/students/:id",
    validateStudent,
    (req, res) => {

        const id =
            Number(req.params.id);

        const student =
            students.find(
                item => item.id === id
            );


        if (!student) {

            return res.status(404).json({

                error:
                    "Student not found."

            });

        }


        student.name =
            req.body.name.trim();

        student.course =
            req.body.course.trim();

        student.semester =
            Number(req.body.semester);


        res.json({

            message:
                "Student updated successfully.",

            student: student

        });

    }
);


app.delete("/students/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const index =
        students.findIndex(
            item => item.id === id
        );


    if (index === -1) {

        return res.status(404).json({

            error:
                "Student not found."

        });

    }


    students.splice(index, 1);


    res.json({

        message:
            "Student deleted successfully."

    });

});


app.listen(3056, () => {

    console.log(
        "CRUD 06 running at http://localhost:3056"
    );

});