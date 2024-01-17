const express = require('express');
const app = express();
const port = process.env.PORT || 8080

// NOTE TEXT -> MONGOOSE CONFIG (.env)
const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = require('./db/connect');

connectToDatabase();

app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));