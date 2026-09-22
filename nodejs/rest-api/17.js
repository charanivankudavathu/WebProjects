const express = require("express");

const jwt =
    require("jsonwebtoken");


const app = express();

app.use(express.json());


const SECRET_KEY =
    "rest_api_secret_key";


const users = [

    {
        id: 1,
        username: "admin",
        password: "12345",
        role: "admin"
    },

    {
        id: 2,
        username: "student",
        password: "12345",
        role: "user"
    }

];


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


    const token =
        jwt.sign(

            {
                id: user.id,

                username:
                    user.username,

                role:
                    user.role
            },

            SECRET_KEY,

            {
                expiresIn: "1h"
            }

        );


    res.json({

        message:
            "Login successful.",

        token:
            token

    });

});


function authenticateToken(
    req,
    res,
    next
) {

    const header =
        req.headers.authorization;


    if (!header) {

        return res.status(401).json({

            message:
                "Authentication token required."

        });

    }


    const token =
        header.split(" ")[1];


    jwt.verify(
        token,
        SECRET_KEY,
        (error, user) => {

            if (error) {

                return res.status(403).json({

                    message:
                        "Invalid or expired token."

                });

            }


            req.user = user;

            next();

        }
    );

}


function requireAdmin(
    req,
    res,
    next
) {

    if (req.user.role !== "admin") {

        return res.status(403).json({

            message:
                "Admin access required."

        });

    }


    next();

}


app.get(
    "/users",
    authenticateToken,
    (req, res) => {

        res.json({

            users:
                users.map(
                    user => ({
                        id: user.id,
                        username: user.username,
                        role: user.role
                    })
                )

        });

    }
);


app.get(
    "/admin/users",
    authenticateToken,
    requireAdmin,
    (req, res) => {

        res.json({

            message:
                "Admin users API accessed.",

            users:
                users

        });

    }
);


app.listen(3087, () => {

    console.log(
        "REST API 17 running at http://localhost:3087"
    );

});