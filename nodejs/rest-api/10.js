const express = require("express");

const app = express();


let students = [

    {
        id: 1,
        name: "Student 1"
    },

    {
        id: 2,
        name: "Student 2"
    }

];


app.delete("/students/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const index =
        students.findIndex(
            student => student.id === id
        );


    if (index === -1) {

        return res.status(404).json({
            message: "Student not found."
        });

    }


    const deleted =
        students.splice(index, 1);


    res.status(200).json({

        message:
            "Student deleted successfully.",

        student: deleted[0]

    });

});


app.listen(3080, () => {

    console.log(
        "REST API 10 running at http://localhost:3080"
    );

});