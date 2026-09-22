const express = require("express");
const session = require("express-session");

const app = express();


app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 10 * 60 * 1000
        }
    })
);


app.get("/", (req, res) => {

    if (!req.session.views) {

        req.session.views = 0;

    }

    req.session.views++;

    res.send(`
        <h1>Session Management</h1>

        <p>
            This page has been visited
            ${req.session.views} time(s)
            during this session.
        </p>

        <a href="/">
            Refresh Page
        </a>
    `);

});


app.listen(3033, () => {

    console.log(
        "Session 03 running at http://localhost:3033"
    );

});