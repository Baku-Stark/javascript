const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodeapi.61bjodc.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
// client.connect();

const dbName = "myListUsers";
const collectionName = "users";

const database = client.db(dbName);
const collection = database.collection(collectionName);

class DataBase{
  async insert_user(doc){
    try {
      const cursor = await collection.insertOne(doc)
  
      console.log("Great! " + cursor.insertedId)
    }
    
    catch (err) {
      console.error(`Situation: ${err}\n`);
    }

    // finally{
    //   await client.close();
    // }
  }
}

module.exports = {
  DataBase
}