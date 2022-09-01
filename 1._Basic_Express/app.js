const express = require('express')
const app = express()

//GET takes two inputs, the endpoint and a callback function
app.get('/', (request, response) => {
  response.send({ message: 'Created my first route, check!' })
})

app.listen(8080)
