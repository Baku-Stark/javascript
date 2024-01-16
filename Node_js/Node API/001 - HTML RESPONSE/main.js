// NPM -> npm install express
const express = require('express');
const app = express()
const port = process.env.PORT || 8080

const path = require('path')

// ========================= EXPRESS -> HTML RESPONSE =========================
app.get('/', async (req, res) => {
    try {
        return res.statusCode == 200 ? res.sendFile(path.join(__dirname, '/page/index.html')) : console.log("Error")
    } catch (error) {
        console.log(error)
    }
});
// ========================= EXPRESS -> HTML RESPONSE =========================

//console.log(__dirname);
app.listen(port, () => console.log(`Listening at the port: http://localhost:${port}`));