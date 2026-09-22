const express = require("express");

const app = express();

app.use(express.json());


app.get("/error", (req, res, next) => {

    const error =
        new Error(
            "Something went wrong."
        );

    next(error);

});


app.use(
    (err, req, res, next) => {

        console.error(err.message);

        res.status(500).json({

            error:
                "Internal Server Error",

            message:
                err.message

        });

    }
);


app.listen(3082, () => {

    console.log(
        "REST API 12 running at http://localhost:3082"
    );

});