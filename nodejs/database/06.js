const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function deleteStudent() {

    try {

        await client.connect();

        const database =
            client.db("college");

        const students =
            database.collection("students");


        const result =
            await students.deleteOne({

                id: 101

            });


        console.log(
            "Deleted records:",
            result.deletedCount
        );


    } catch (error) {

        console.error(
            "Delete failed:",
            error.message
        );

    } finally {

        await client.close();

    }

}


deleteStudent();