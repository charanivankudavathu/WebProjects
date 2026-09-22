const express = require("express");

const {
    MongoClient
} = require("mongodb");


const app = express();

app.use(express.json());


const url =
    "mongodb://127.0.0.1:27017";

const client =
    new MongoClient(url);


let students;


async function connectDatabase() {

    await client.connect();

    const database =
        client.db("college");

    students =
        database.collection("students");

    console.log(
        "Connected to MongoDB."
    );

}


app.get("/students", async (req, res) => {

    try {

        const data =
            await students.find({}).toArray();

        res.json(data);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


app.post("/students", async (req, res) => {

    try {

        const student = {

            name: req.body.name,

            course: req.body.course,

            semester:
                Number(req.body.semester)

        };


        const result =
            await students.insertOne(student);


        res.status(201).json({

            message:
                "Student created successfully.",

            id:
                result.insertedId

        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


app.listen(3085, async () => {

    try {

        await connectDatabase();

        console.log(
            "REST API 15 running at http://localhost:3085"
        );

    } catch (error) {

        console.error(
            "Database connection failed:",
            error.message
        );

    }

});