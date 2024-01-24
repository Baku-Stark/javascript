const { DataBase } = require('../db/connect');
const db = new DataBase()

const express = require('express');
const app = express()

app.use(express.json());

app.get('/get_all_users', async (req, res) => {
    try {
        return res.status(200).json(await db.get_all_users());
    }
    
    catch (error) {
        console.log(error)
    }
});

app.get('/get_user_by_name_=:name', async (req, res) => {
    try {
        const name = req.params.name;
        return res.status(200).json(await db.get_user_by_name(name));
    }
    
    catch (error) {
        console.log(error)
    }
});

app.post('/create_users', async (req, res) => {
    try {
        const new_user = req.body;
        
        return res.status(201).json(await db.insert_user(new_user));
    }
    
    catch (error) {
        console.log(error)
    }
});

app.delete('/delete_user_=:user', async (req, res) => {
    try {
        const user = req.params.user;
        // console.log(user);
        
        return res.status(200).json(await db.delete_user(user))
    }
    
    catch (error) {
        console.log(error)
    }
})

app.put('/update_user_=:user', async (req, res) => {
    try {
        const user = req.params.user;
        const update_user = req.body;
        // console.log(user);

        return res.status(200).json(db.update_user(user, update_user))
    }
    
    catch (error) {
        console.log(error)
    }
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));