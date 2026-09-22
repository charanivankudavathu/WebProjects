const express = require("express");

const studentRoutes =
    require("./routes/studentRoutes");

const app = express();

app.use(
    "/students",
    studentRoutes
);

app.listen(3005, () => {

    console.log(
        "Express 05 running at http://localhost:3005"
    );

});