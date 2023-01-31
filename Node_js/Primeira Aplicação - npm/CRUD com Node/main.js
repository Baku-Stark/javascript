// CONFIG INICIAL
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// FORMA DE LER JSON
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// ROTAS DA API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// ROTA INICIAL / ENDPOINT
app.get('/', (req, res) => {
    // mostrar req
    res.json({message: 'Oi, Express!'})
})

// PORTA PARA ENTREGA
const JSON_FILE = require('./config/user.json')
const DB_User = JSON_FILE.USER
const DB_Password = JSON_FILE.PASSWORD
mongoose
    .connect(
        `mongodb+srv://${DB_User}:${DB_Password}@apicluster0.hugbuto.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('[VALID] - Conectado ao Banco de Dados')
        app.listen(3000)
    })
    .catch((err) => {
        console.log('[ERRO] - Nao foi possível estabelecer uma conexão...' + err)
    }
    )