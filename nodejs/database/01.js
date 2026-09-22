const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function connectDatabase() {

    try {

        await client.connect();

        console.log(
            "Connected to MongoDB successfully."
        );

    } catch (error) {

        console.error(
            "Database connection failed:",
            error.message
        );

    } finally {

        await client.close();

    }

}


connectDatabase();