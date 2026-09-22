const express = require("express");

const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());


app.post("/hash-password", async (req, res) => {

    const {
        password
    } = req.body;


    if (!password) {

        return res.status(400).json({

            message:
                "Password is required."

        });

    }


    const hashedPassword =
        await bcrypt.hash(
            password,
            10
        );


    res.json({

        message:
            "Password hashed successfully.",

        hashedPassword:
            hashedPassword

    });

});


app.get("/", (req, res) => {

    res.send(
        "Authentication 03: Password Hashing"
    );

});


app.listen(3063, () => {

    console.log(
        "Authentication 03 running at http://localhost:3063"
    );

});