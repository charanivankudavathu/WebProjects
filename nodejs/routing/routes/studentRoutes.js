const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {

    res.send(
        "Student Routes"
    );

});


router.get("/list", (req, res) => {

    res.send(
        "Student List"
    );

});


module.exports = router;