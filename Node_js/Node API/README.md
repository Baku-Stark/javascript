# BASE CODE

> 💿 Update: `Node API`

**node modules:** `npm i express` - `npm i body-parser` - `npm i multer`

```js
const express = require('express');
const app = express()
const port = process.env.PORT || 8080

app.{route(get, post, delete, patch, etc)}('URL NAME', async (req, res) => {
    try {
        return CODE
    } catch (error) {
        console.log(error)
    }
});

app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));
```

---

<br>

# JSON (RAW)

```js
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/user/create', async (req, res) => {
    try {
        const request = req.body;
        return res.status(200).json(request);
    }
    
    catch (error) {
        return res.status(500).json({"response": error.message});
    }
})
```

---

<br>

# FORM DATA

```js
const bodyParser = require('body-parser');

const app = express()

var multer = require('multer')
var upload = multer()

app.use(upload.array()); 
app.use(express.static('public'));

app.post('/user/create', async (req, res) => {
    try {
        const request = req.body;
        return res.status(200).json(request);
    }
    
    catch (error) {
        return res.status(500).json({"response": error.message});
    }
})
```

---

<br>

# MongoDB Connect

**node modules:** `npm install dotenv` - `npm i mongoose`

```js

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@nodeapi.61bjodc.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

```