const express = require('express')
const app = express()

let weaponsArray = [
  { type: 'Assault Rifle', name: 'AK-47', price: 100, id: 1 },
  { type: 'Shotgun', name: 'Remington Model 887', price: 100, id: 2 },
]

app.get('/', (request, response) => {
  response.send({ message: 'Created my first route, check!' })
})

app.get('/weapons', (req, res) => {
  res.send(weaponsArray)
})

app.get('/weapons/:id', (req, res) => {
  for (let v in weaponsArray) {
    if (weaponsArray[v].id === Number(req.params.id)) {
      res.send(weaponsArray[v])
      return
    }
  }
  res.send({ errorMessage: `${req.params.id} doesn't exist` })
})

app.listen(8080, () => {
  console.log('Server is running on port', 8080)
})
