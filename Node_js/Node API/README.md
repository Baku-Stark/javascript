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