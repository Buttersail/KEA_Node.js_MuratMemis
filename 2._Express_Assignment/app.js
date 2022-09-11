const express = require('express')
const app = express()

// I dont know if this is the solution you wanted, I dont feel like it's the right way of solving this.
// Looking forward to the next class so I can learn the correct way of doing this.
let weaponsArray = [
  { type: 'Assault Rifle', name: 'AK-47', price: 100 },
  { type: 'Shotgun', name: 'Remington Model 887', price: 100 },
]

app.get('/', (request, response) => {
  response.send({ message: 'Created my first route, check!' })
})

app.get('/weapons', (req, res) => {
  res.send(weaponsArray)
})

app.get('/weapons/:id', (req, res) => {
  if (Number(req.params.id) === 1) {
    res.send(weaponsArray[0])
  } else if (Number(req.params.id) === 2) {
    res.send(weaponsArray[1])
  } else {
    res.send({ errorMessage: 'No such weapon' })
  }
})

app.listen(8080, () => {
  console.log('Server is running on port', 8080)
})
