const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {

    res.status(200).json({
        message: "Success"
    });

});


app.post("/students", (req, res) => {

    res.status(201).json({
        message:
            "Student created successfully."
    });

});


app.get("/students/404", (req, res) => {

    res.status(404).json({
        message:
            "Student not found."
    });

});


app.get("/unauthorized", (req, res) => {

    res.status(401).json({
        message:
            "Authentication required."
    });

});


app.get("/forbidden", (req, res) => {

    res.status(403).json({
        message:
            "Access forbidden."
    });

});


app.listen(3081, () => {

    console.log(
        "REST API 11 running at http://localhost:3081"
    );

});