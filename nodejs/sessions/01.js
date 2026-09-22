const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());


app.get("/", (req, res) => {

    res.send(`
        <h1>Cookie Management</h1>

        <p>
            Click the link below to create a cookie.
        </p>

        <a href="/create-cookie">
            Create Cookie
        </a>
    `);

});


app.get("/create-cookie", (req, res) => {

    res.cookie(
        "username",
        "Student",
        {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        }
    );

    res.send(`
        <h1>Cookie Created</h1>

        <p>
            Username cookie has been created.
        </p>

        <a href="/">
            Go Back
        </a>
    `);

});


app.listen(3031, () => {

    console.log(
        "Session 01 running at http://localhost:3031"
    );

});