const express = require("express");

const app = express();

app.use(express.json());


const users = [];


app.post("/register", (req, res) => {

    const {
        username,
        password
    } = req.body;


    if (!username || !password) {

        return res.status(400).json({

            message:
                "Username and password are required."

        });

    }


    const existingUser =
        users.find(
            user => user.username === username
        );


    if (existingUser) {

        return res.status(409).json({

            message:
                "Username already exists."

        });

    }


    const user = {

        id: users.length + 1,

        username: username,

        password: password

    };


    users.push(user);


    res.status(201).json({

        message:
            "User registered successfully.",

        user: {

            id: user.id,

            username: user.username

        }

    });

});


app.get("/", (req, res) => {

    res.send(
        "Authentication 01: User Registration"
    );

});


app.listen(3061, () => {

    console.log(
        "Authentication 01 running at http://localhost:3061"
    );

});