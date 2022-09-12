import express from 'express'
const app = express()

const weapons = [{ name: 'AK-47' }, { name: 'Knife' }]

app.get('/weapons', (req, res) => {
  res.send({ data: weapons })
})

app.listen(8080, () => {
  console.log('Server is running on port', 8080)
})
