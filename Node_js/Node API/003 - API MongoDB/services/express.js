const { DataBase } = require('../db/connect');

const express = require('express');
const app = express()

app.use(express.json());

app.get('/get_all_users', async (req, res) => {
    try {
        return res.status(200).json(Read_All_Users());
    }
    
    catch (error) {
        console.log(error)
    }
});

app.post('/create_users', async (req, res) => {
    try {
        const new_user = req.body
        const db = new DataBase()
        db.insert_user(new_user)
        
        return res.status(201).json(new_user);
    }
    
    catch (error) {
        console.log(error)
    }
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));