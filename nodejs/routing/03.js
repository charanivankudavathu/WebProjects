const express = require("express");

const studentRoutes =
    require("./routes/studentRoutes");

const app = express();


app.use(
    "/students",
    studentRoutes
);


app.listen(3013, () => {

    console.log(
        "Routing 03 running at http://localhost:3013"
    );

});