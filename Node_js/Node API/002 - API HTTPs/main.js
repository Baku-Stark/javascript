const express = require('express');
const app = express()
const port = process.env.PORT || 8080

const users = {
    "data": [
        {
            "id": 1,
            "name": "Wallace",
            "age": 23,
            "job": "developer"
        },
        {
            "id": 2,
            "name": "Zoro",
            "age": 21,
            "job": "Pirate"
        },
        {
            "id": 3,
            "name": "Tony Stark",
            "age": 54,
            "job": "Avenger"
        },
    ]
}

app.get('/users', async(req, res) => {
    try {
        return res.status(200).json(users);
    }
    
    catch (error) {
        return res.status(500).json({"response": error.message});
    }
});

// ========================= API -> VARIABLES =========================
app.get('/user_=:id', async (req, res) => {
    try {
        const id = req.params.id; // PARAM -> {:id}
        //console.log(id)
    
        const user = [];
    
        users['data'].map((data) => {
            if(data['id'] == id ){
                //console.log(data)
                user.push(data) 
            }
        });
    
        return res.status(200).json(user);   
    }
    
    catch (error) {
        return res.status(500).json({"response": error.message});
    }
})

app.delete('/user/delete/:id', async (req, res) => {
    try {
        const id = req.params.id; // PARAM -> {:id}
        console.log(id)

        users['data'].map((data) => {
            if(data['id'] == id ){
                //console.log(data)
                delete users['data'][id - 1]
            }
        });

        return res.status(200).json(users);
    }
    
    catch (error) {
        return res.status(500).json({"response": error.message});
    }
})

app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));