const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {

    res.send(
        "Product Routes"
    );

});


router.get("/list", (req, res) => {

    res.send(
        "Product List"
    );

});


module.exports = router;