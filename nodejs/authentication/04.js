const express = require("express");

const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());


const password =
    "12345";


const hashedPassword =
    bcrypt.hashSync(
        password,
        10
    );


app.post(
    "/verify-password",
    async (req, res) => {

        const {
            password
        } = req.body;


        if (!password) {

            return res.status(400).json({

                message:
                    "Password is required."

            });

        }


        const isMatch =
            await bcrypt.compare(
                password,
                hashedPassword
            );


        if (isMatch) {

            return res.json({

                message:
                    "Password verified successfully."

            });

        }


        res.status(401).json({

            message:
                "Password verification failed."

        });

    }
);


app.get("/", (req, res) => {

    res.send(
        "Authentication 04: Password Verification"
    );

});


app.listen(3064, () => {

    console.log(
        "Authentication 04 running at http://localhost:3064"
    );

});