const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodeapi.61bjodc.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("myListUsers");
    const collection = database.collection("users");
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  
  finally {
    await client.close();
  }
}
run().catch(console.dir);