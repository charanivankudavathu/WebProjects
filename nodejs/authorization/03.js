const express = require("express");

const app = express();


const users = {

    admin: {
        username: "admin",
        role: "admin"
    },

    student: {
        username: "student",
        role: "user"
    }

};


function checkRole(requiredRole) {

    return (req, res, next) => {

        const username =
            req.query.username;

        const user =
            users[username];


        if (!user) {

            return res.status(401).json({
                message: "Invalid user."
            });

        }


        if (user.role !== requiredRole) {

            return res.status(403).json({
                message:
                    "You do not have permission to access this route."
            });

        }


        next();

    };

}


app.get(
    "/admin/dashboard",
    checkRole("admin"),
    (req, res) => {

        res.json({
            message:
                "Admin dashboard accessed."
        });

    }
);


app.get(
    "/user/profile",
    checkRole("user"),
    (req, res) => {

        res.json({
            message:
                "User profile accessed."
        });

    }
);


app.listen(3073, () => {

    console.log(
        "Authorization 03 running at http://localhost:3073"
    );

});