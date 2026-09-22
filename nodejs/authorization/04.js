const express = require("express");

const app = express();

app.use(express.json());


function authorizationMiddleware(
    requiredRole
) {

    return (req, res, next) => {

        const role =
            req.headers["x-user-role"];


        if (!role) {

            return res.status(401).json({
                message:
                    "User role is required."
            });

        }


        if (role !== requiredRole) {

            return res.status(403).json({
                message:
                    "Authorization failed."
            });

        }


        next();

    };

}


app.get("/", (req, res) => {

    res.send(
        "Authorization 04: Authorization Middleware"
    );

});


app.get(
    "/admin",
    authorizationMiddleware("admin"),
    (req, res) => {

        res.json({
            message:
                "Protected admin route accessed."
        });

    }
);


app.listen(3074, () => {

    console.log(
        "Authorization 04 running at http://localhost:3074"
    );

});