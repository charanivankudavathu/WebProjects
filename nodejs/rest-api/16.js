const express = require("express");

const app = express();

app.use(express.json());


let products = [

    {
        id: 1,
        name: "Laptop",
        price: 50000
    }

];


app.get("/products", (req, res) => {

    res.status(200).json(products);

});


app.get("/products/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {

        return res.status(404).json({
            message: "Product not found."
        });

    }


    res.json(product);

});


app.post("/products", (req, res) => {

    const product = {

        id:
            products.length + 1,

        name:
            req.body.name,

        price:
            Number(req.body.price)

    };


    products.push(product);

    res.status(201).json(product);

});


app.put("/products/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {

        return res.status(404).json({
            message: "Product not found."
        });

    }


    product.name =
        req.body.name || product.name;

    if (req.body.price !== undefined) {

        product.price =
            Number(req.body.price);

    }


    res.json(product);

});


app.delete("/products/:id", (req, res) => {

    const id =
        Number(req.params.id);

    const index =
        products.findIndex(
            item => item.id === id
        );


    if (index === -1) {

        return res.status(404).json({
            message: "Product not found."
        });

    }


    products.splice(index, 1);

    res.json({
        message:
            "Product deleted successfully."
    });

});


app.listen(3086, () => {

    console.log(
        "REST API 16 running at http://localhost:3086"
    );

});