const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function insertStudent() {

    try {

        await client.connect();

        const database =
            client.db("college");

        const students =
            database.collection("students");


        const student = {

            id: 101,

            name: "Student",

            course: "BTech",

            semester: 3

        };


        const result =
            await students.insertOne(student);


        console.log(
            "Student inserted successfully."
        );

        console.log(
            "Inserted ID:",
            result.insertedId
        );


    } catch (error) {

        console.error(
            "Insert failed:",
            error.message
        );

    } finally {

        await client.close();

    }

}


insertStudent();