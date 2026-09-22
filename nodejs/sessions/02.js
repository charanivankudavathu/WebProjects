const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());


app.get("/", (req, res) => {

    res.send(`
        <h1>Cookie Operations</h1>

        <p>
            Select an operation:
        </p>

        <a href="/create">
            Create Cookie
        </a>

        <br><br>

        <a href="/read">
            Read Cookie
        </a>

        <br><br>

        <a href="/delete">
            Delete Cookie
        </a>
    `);

});


app.get("/create", (req, res) => {

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
            Cookie value: Student
        </p>

        <a href="/">
            Go Back
        </a>
    `);

});


app.get("/read", (req, res) => {

    const username =
        req.cookies.username;

    if (!username) {

        return res.send(
            "Cookie does not exist."
        );

    }

    res.send(`
        <h1>Cookie Read</h1>

        <p>
            Username: ${username}
        </p>

        <a href="/">
            Go Back
        </a>
    `);

});


app.get("/delete", (req, res) => {

    res.clearCookie("username");

    res.send(`
        <h1>Cookie Deleted</h1>

        <p>
            Username cookie has been deleted.
        </p>

        <a href="/">
            Go Back
        </a>
    `);

});


app.listen(3032, () => {

    console.log(
        "Session 02 running at http://localhost:3032"
    );

});