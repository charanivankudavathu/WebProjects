const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function updateStudent() {

    try {

        await client.connect();

        const database =
            client.db("college");

        const students =
            database.collection("students");


        const result =
            await students.updateOne(

                {
                    id: 101
                },

                {
                    $set: {
                        course: "Computer Science"
                    }
                }

            );


        console.log(
            "Matched records:",
            result.matchedCount
        );

        console.log(
            "Updated records:",
            result.modifiedCount
        );


    } catch (error) {

        console.error(
            "Update failed:",
            error.message
        );

    } finally {

        await client.close();

    }

}


updateStudent();