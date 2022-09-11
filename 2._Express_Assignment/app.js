const express = require('express')
const app = express()

let weapons = {
  1: {
    id: 1,
    type: 'Assault Rifle',
    name: 'AK-47',
  },
  2: {
    id: 2,
    type: 'Shotgun',
    name: 'Remington Model 887',
  },

  appelsinvand: {
    id: 'appelsinvand',
    type: 'Læskedrik',
    name: 'Appelsinvand',
    trivia: 'Min appelsinvand',
  },
}

app.get('/weapons', (req, res) => {
  res.send(Object.values(weapons))
})

app.get('/weapons/:id', (req, res) => {
  if (req.params.id in weapons) {
    res.send(weapons[req.params.id])
  } else {
    res.send({ errorMessage: `${req.params.id} doesn't exist` })
  }
})

app.listen(8080, () => {
  console.log('Server is running on port', 8080)
})
