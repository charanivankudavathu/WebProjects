const express = require("express");

const app = express();

app.use(express.json());

const users = [
    {
        id: 1,
        username: "admin",
        role: "admin"
    },
    {
        id: 2,
        username: "student",
        role: "user"
    }
];


function authorizeRole(role) {

    return (req, res, next) => {

        const username =
            req.query.username;

        const user =
            users.find(
                item => item.username === username
            );

        if (!user) {

            return res.status(401).json({
                message: "User not found."
            });

        }

        if (user.role !== role) {

            return res.status(403).json({
                message: "Access denied."
            });

        }

        req.user = user;

        next();
    };
}


app.get("/", (req, res) => {

    res.send(
        "Authorization 01: Role-Based Authorization"
    );

});


app.get(
    "/admin",
    authorizeRole("admin"),
    (req, res) => {

        res.json({
            message: "Welcome Admin.",
            user: req.user
        });

    }
);


app.get(
    "/user",
    authorizeRole("user"),
    (req, res) => {

        res.json({
            message: "Welcome User.",
            user: req.user
        });

    }
);


app.listen(3071, () => {

    console.log(
        "Authorization 01 running at http://localhost:3071"
    );

});