const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require("node-fetch");
const api = require('./api.js')

const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/test', (req, res) => {
    fetch (api())
    .then(response => {
        response.json().then(data => {
            res.send(data)
        })
    })
})

app.post('/register', (req, res) => {
    res.send(`thank you for registring ${req.body.email}`)
})

app.get('/randomrecipes', (req, res) => {
    fetch (api.apiRandom)
    .then(response => {
        response.json().then(data => {
            res.send(data)
        })
    })
})

app.get('/recipes', (req, res) => {
    fetch (api.apiBulk)
    .then(response => {
        response.json().then(data => {
            res.send(data)
        })
    })
})

app.listen(process.env.PORT || 8081)