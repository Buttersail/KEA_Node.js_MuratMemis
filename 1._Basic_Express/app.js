// Import express
const express = require('express')
//Instantiate the library express
const app = express()

// Single line import
// const app = require('express')()

// route
//GET takes two inputs, the endpoint and a callback function
app.get('/', (request, response) => {
  response.send({ message: 'Created my first route, check!' })
})

app.get('/deers', (req, res) => {
  res.send({ size: 'BIG' })
})

app.get('/deers/:id', (req, res) => {
  //console.log(req.params.id)
  if (Number(req.params.id) === 1) {
    res.send({ name: 'Bambi', theBestAndOGDeer: true })
  } else {
    res.send({ errorMessage: "I don't know that deer" })
  }
})

app.get('/actors', (req, res) => {
  console.log(req.query.name)
  // Brug spread operatoren til at samle det hele i et object
  res.send({ message: 'Information about the acotr', ...req.query })
})

// Task make a cups route
app.get('/cups', (req, res) => {
  res.send({ amount: 'Many' })
})

app.get('/lookundetthebed', (req, res) => {
  /* Assignment: Allow the user to define if they have a flashlight
     if they do then send the response "You are safe"
     If they don't then redireect them to /monster
  */

  if (req.query.flashlight) {
    return res.send({ message: 'You are safe' })
  }
  res.redirect('/monster')
})

app.get('/monster', (req, res) => {
  res.send({ message: 'Uh oh! Scary Monster!!!' })
})

app.listen(8080, () => {
  console.log('Server is running on port', 8080)
})

// Ways to send data with GET
// This also works for all HTTP Methods
// 1.
// path variables
// /deers/{id}

// 2.
// query parameters (query string)
// deers?key=value&key2=value (%20 for whitespace)
