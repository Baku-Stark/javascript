const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1>Hello World!</h1>");
});

app.get('/users', (req, res) => {
    const users = [
        {
            "name": "Jonh Doe",
            "email": "john@doe.com"
        },
        {
            "name": "Jane Doe",
            "email": "jane@doe.com"
        },
        {
            "name": "Wallace (Express)",
            "email": "wallace@doe.com"
        },
    ]
    res.contentType("application/json");
    res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));