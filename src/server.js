const express = require('express')
const app = express()
const path = require('path');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, res, next) => {
    console.log(req.body)
    res.send('<h1>Sucesso !</h1>')
    
})


app.listen(3003)