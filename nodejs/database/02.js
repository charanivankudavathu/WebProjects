const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function createCollection() {

    try {

        await client.connect();

        const database =
            client.db("college");

        const collections =
            await database
                .listCollections()
                .toArray();

        const exists =
            collections.some(
                collection =>
                    collection.name === "students"
            );


        if (!exists) {

            await database.createCollection(
                "students"
            );

            console.log(
                "Students collection created successfully."
            );

        } else {

            console.log(
                "Students collection already exists."
            );

        }


    } catch (error) {

        console.error(
            "Error:",
            error.message
        );

    } finally {

        await client.close();

    }

}


createCollection();