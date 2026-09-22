const express = require("express");

const app = express();

app.use(express.json());


const users = [

    {
        username: "student",
        password: "12345"
    }

];


let loggedInUser = null;


app.post("/login", (req, res) => {

    const {
        username,
        password
    } = req.body;


    const user =
        users.find(
            item =>
                item.username === username &&
                item.password === password
        );


    if (!user) {

        return res.status(401).json({

            message:
                "Invalid username or password."

        });

    }


    loggedInUser = username;


    res.json({

        message:
            "Login successful.",

        username: username

    });

});


app.post("/logout", (req, res) => {

    loggedInUser = null;


    res.json({

        message:
            "Logout successful."

    });

});


app.get("/", (req, res) => {

    res.send(
        "Authentication 02: Login and Logout"
    );

});


app.listen(3062, () => {

    console.log(
        "Authentication 02 running at http://localhost:3062"
    );

});