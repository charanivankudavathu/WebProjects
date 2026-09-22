const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send(`
        <!DOCTYPE html>
        <html>

        <head>
            <title>HTML Response</title>
        </head>

        <body>

            <h1>HTML Response from Express</h1>

            <p>
                This response was sent using res.send().
            </p>

        </body>

        </html>
    `);

});

app.get("/api/student", (req, res) => {

    res.json({
        id: 1,
        name: "Student",
        course: "BTech",
        semester: 3
    });

});

app.listen(3004, () => {

    console.log(
        "Express 04 running at http://localhost:3004"
    );

});