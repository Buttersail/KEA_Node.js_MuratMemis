import express, { response } from 'express'
const app = express()

app.use(express.static('public'))

import path from 'path'

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/frontpage/frontpage.html'))
})

app.get('/api/pokemon', (req, res) => {
  // assignment use fetch to get pokemon from the pokeapi and send them as data in the response

  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((result) => {
      res.send({ data: result })
    })

  //res.send({ data: ['Slowpoke'] })
})

app.get('/battle', (req, res) => {
  res.sendFile(path.resolve('public/battle/battle.html'))
})

// assignement use the pokeapi to request 20 pokemon and show them on the page

// should output 11 since the first 3 results are falsy
// console.log(undefined || null || '' || 11 || 10)

// task make sure that the server actually runs on the port in the environment variable if defined
const PORT = process.env.PORT || 8080

console.log(process.env.PORT)

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log('Server is running on port', server.address().port)
})
