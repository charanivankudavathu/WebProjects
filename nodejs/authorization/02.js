const express = require("express");

const app = express();

const users = [

    {
        username: "admin",
        role: "admin"
    },

    {
        username: "student",
        role: "user"
    }

];


app.get("/", (req, res) => {

    res.json({
        message: "Admin and User Roles",
        users: users
    });

});


app.get("/admin", (req, res) => {

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


    if (user.role !== "admin") {

        return res.status(403).json({
            message:
                "Only administrators can access this route."
        });

    }


    res.json({
        message: "Admin area accessed successfully."
    });

});


app.get("/user", (req, res) => {

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


    res.json({
        message: "User area accessed successfully.",
        user: user
    });

});


app.listen(3072, () => {

    console.log(
        "Authorization 02 running at http://localhost:3072"
    );

});