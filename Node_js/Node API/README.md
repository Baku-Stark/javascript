# BASE CODE

> 💿 Update: `Node API`

**node modules:** `npm install express`

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