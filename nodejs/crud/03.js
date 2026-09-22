const express = require("express");

const app = express();

app.use(express.json());


let users = [
    {
        id: 1,
        name: "John",
        email: "john@example.com"
    }
];


app.get("/users", (req, res) => {

    res.json(users);

});


app.post("/users", (req, res) => {

    const user = {

        id:
            users.length === 0
                ? 1
                : users[users.length - 1].id + 1,

        name: req.body.name,

        email: req.body.email

    };


    users.push(user);

    res.status(201).json(user);

});


app.put("/users/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const user =
        users.find(
            item => item.id === id
        );


    if (!user) {

        return res.status(404).json({
            message: "User not found"
        });

    }


    user.name =
        req.body.name || user.name;

    user.email =
        req.body.email || user.email;


    res.json(user);

});


app.delete("/users/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const index =
        users.findIndex(
            item => item.id === id
        );


    if (index === -1) {

        return res.status(404).json({
            message: "User not found"
        });

    }


    users.splice(index, 1);

    res.json({
        message: "User deleted successfully"
    });

});


app.listen(3053, () => {

    console.log(
        "CRUD 03 running at http://localhost:3053"
    );

});