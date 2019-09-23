const express = require('express')
const axios = require('axios') //Esta libreria es para hacer peticiones http y permite usar promesas
const bodyParser = require('body-parser') //Esta libreria es para poder acceder al body de un mensaje http dentro de express
const { users } = require('./endpoints')
const app = express()
const port = 3000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const usersHandlers = users({ axios })

app.get('/', usersHandlers.get);

app.get('/:id', usersHandlers.get1);

app.post('/', usersHandlers.post)

app.put('/:id', usersHandlers.put)

app.delete('/:id', usersHandlers.delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))