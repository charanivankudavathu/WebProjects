const express = require("express");

const app = express();

app.use(express.json());


function validateStudent(
    req,
    res,
    next
) {

    const {
        name,
        course
    } = req.body;


    if (
        !name ||
        !name.trim()
    ) {

        return res.status(400).json({

            error:
                "Name is required."

        });

    }


    if (
        !course ||
        !course.trim()
    ) {

        return res.status(400).json({

            error:
                "Course is required."

        });

    }


    next();

}


app.post(
    "/students",
    validateStudent,
    (req, res) => {

        res.status(201).json({

            message:
                "Request validation successful.",

            student:
                req.body

        });

    }
);


app.listen(3083, () => {

    console.log(
        "REST API 13 running at http://localhost:3083"
    );

});