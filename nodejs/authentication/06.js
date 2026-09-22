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


function authenticateToken(
    req,
    res,
    next
) {

    const authHeader =
        req.headers.authorization;


    if (!authHeader) {

        return res.status(401).json({

            message:
                "Access token required."

        });

    }


    const token =
        authHeader.split(" ")[1];


    if (!token) {

        return res.status(401).json({

            message:
                "Invalid authorization header."

        });

    }


    jwt.verify(
        token,
        SECRET_KEY,
        (error, decoded) => {

            if (error) {

                return res.status(403).json({

                    message:
                        "Invalid or expired token."

                });

            }


            req.user = decoded;

            next();

        }
    );

}


app.get(
    "/dashboard",
    authenticateToken,
    (req, res) => {

        res.json({

            message:
                "Welcome to the protected dashboard.",

            user:
                req.user

        });

    }
);


app.get("/", (req, res) => {

    res.send(
        "Authentication 06: Protected API Routes"
    );

});


app.listen(3066, () => {

    console.log(
        "Authentication 06 running at http://localhost:3066"
    );

});