const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function retrieveStudents() {

    try {

        await client.connect();

        const database =
            client.db("college");

        const students =
            database.collection("students");


        const records =
            await students
                .find({})
                .toArray();


        console.log(
            "Student Records:"
        );

        console.table(records);


    } catch (error) {

        console.error(
            "Retrieval failed:",
            error.message
        );

    } finally {

        await client.close();

    }

}


retrieveStudents();