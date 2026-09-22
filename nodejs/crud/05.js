const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client =
    new MongoClient(url);


async function runCRUD() {

    try {

        await client.connect();

        console.log(
            "Connected to MongoDB."
        );


        const database =
            client.db("college");

        const students =
            database.collection("students");


        // CREATE

        const student = {

            id: 201,

            name: "CRUD Student",

            course: "BTech",

            semester: 3

        };


        await students.insertOne(student);

        console.log(
            "CREATE: Student inserted."
        );


        // READ

        const records =
            await students.find({}).toArray();

        console.log(
            "READ: Student records:"
        );

        console.table(records);


        // UPDATE

        await students.updateOne(

            {
                id: 201
            },

            {
                $set: {
                    course: "Computer Science"
                }
            }

        );


        console.log(
            "UPDATE: Student updated."
        );


        // DELETE

        await students.deleteOne({

            id: 201

        });


        console.log(
            "DELETE: Student deleted."
        );


    } catch (error) {

        console.error(
            "CRUD operation failed:",
            error.message
        );

    } finally {

        await client.close();

    }

}


runCRUD();