const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const port = process.env.PORT || 8080

var multer = require('multer')
var upload = multer()

const users = {
    "data": [
        {
            "id": 1,
            "name": "Wallace",
            "age": 23,
            "job": ["developer"]
        },
        {
            "id": 2,
            "name": "Zoro",
            "age": 21,
            "job": ["Pirate"]
        },
        {
            "id": 3,
            "name": "Tony Stark",
            "age": 54,
            "job": ["Avenger"]
        },
    ]
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

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

app.post('/user/create', async (req, res) => {
    try {
        const request = req.body;

        return res.status(200).json(request);
    }
    
    catch (error) {
        return res.status(500).json({"response": error.message});
    }
})

app.delete('/user/delete/:id', async (req, res) => {
    try {
        const id = req.params.id; // PARAM -> {:id}
        // console.log(id)

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

app.put('/update/put_user_body=:id', async (req, res) => {
    try {
        const id = req.params.id;

        users['data'].map((data) => {
            if(data['id'] == id ){
                console.log(data)
            }
        });

        return res.status(200).json(users)
    }
    
    catch (error) {
        return res.status(500).json({"response": error.message});
    }
})

app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));