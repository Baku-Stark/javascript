# INSERT DATA

[Insert Data - MongoDB Site](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/)

```js
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://<user>:<password>@nodeapi.61bjodc.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
client.connect();

const dbName = "myListUsers";
const collectionName = "users";

const database = client.db(dbName);
const collection = database.collection(collectionName);

async function run() {
  const doc = {
    name: "Tony",
    age: 54,
    job: [
      'Avenger'
    ]
  }

  try {
    const cursor = await collection.insertOne(doc)

    console.log("Great! " + cursor.insertedId)
  }
  
  catch (err) {
    console.error(`Situation: ${err}\n`);
  }
  finally{
    await client.close();
  }
}
run().catch(console.dir);
```