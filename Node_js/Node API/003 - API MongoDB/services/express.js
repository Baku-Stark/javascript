const UserModel = require('../model/user.model')

const express = require('express');
const app = express()

const database = client.db("myListUsers");
const collection = database.collection("users");

app.use(express.json());

app.get('/get_all_users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        return res.status(200).json(users);
    }
    
    catch (error) {
        console.log(error)
    }
});

app.post('/create_users', async (req, res) => {
    try {
        const response = await UserModel.create(req.body)
        return res.status(201).json(response);
    }
    
    catch (error) {
        console.log(error)
    }
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));