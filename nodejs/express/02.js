const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>GET and POST</title>
        </head>

        <body>

            <h1>Express GET and POST Requests</h1>

            <h2>GET Request</h2>

            <p>
                This page was loaded using a GET request.
            </p>

            <h2>POST Request</h2>

            <form method="POST" action="/submit">

                <label>Enter your name:</label>

                <input
                    type="text"
                    name="name"
                    required
                >

                <button type="submit">
                    Submit
                </button>

            </form>

        </body>
        </html>
    `);
});

app.post("/submit", (req, res) => {

    const name = req.body.name;

    res.send(`
        <h1>POST Request Received</h1>

        <p>
            Hello, ${name}
        </p>

        <p>
            Your data was received using a POST request.
        </p>

        <a href="/">
            Go Back
        </a>
    `);
});

app.listen(3002, () => {

    console.log(
        "Express 02 running at http://localhost:3002"
    );

});