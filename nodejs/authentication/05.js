const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());


const SECRET_KEY =
    "my_secret_key_123";


const user = {

    username: "student",

    password: "12345"

};


app.post("/login", (req, res) => {

    const {
        username,
        password
    } = req.body;


    if (
        username !== user.username ||
        password !== user.password
    ) {

        return res.status(401).json({

            message:
                "Invalid username or password."

        });

    }


    const token =
        jwt.sign(

            {
                username: user.username
            },

            SECRET_KEY,

            {
                expiresIn: "1h"
            }

        );


    res.json({

        message:
            "Login successful.",

        token: token

    });

});


app.get("/", (req, res) => {

    res.send(
        "Authentication 05: JWT Authentication"
    );

});


app.listen(3065, () => {

    console.log(
        "Authentication 05 running at http://localhost:3065"
    );

});