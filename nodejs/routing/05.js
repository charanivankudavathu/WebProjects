const express = require("express");

const userRoutes =
    require("./routes/userRoutes");

const productRoutes =
    require("./routes/productRoutes");

const studentRoutes =
    require("./routes/studentRoutes");


const app = express();


app.use(
    "/users",
    userRoutes
);


app.use(
    "/products",
    productRoutes
);


app.use(
    "/students",
    studentRoutes
);


app.listen(3015, () => {

    console.log(
        "Routing 05 running at http://localhost:3015"
    );

});