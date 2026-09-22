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

    res.json(products);

});


app.post("/products", (req, res) => {

    const product = {

        id:
            products.length === 0
                ? 1
                : products[products.length - 1].id + 1,

        name: req.body.name,

        price: req.body.price

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
            message: "Product not found"
        });

    }


    product.name =
        req.body.name || product.name;

    if (req.body.price !== undefined) {

        product.price =
            req.body.price;

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
            message: "Product not found"
        });

    }


    products.splice(index, 1);

    res.json({
        message: "Product deleted successfully"
    });

});


app.listen(3054, () => {

    console.log(
        "CRUD 04 running at http://localhost:3054"
    );

});