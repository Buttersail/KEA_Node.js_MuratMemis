import express from 'express'
const app = express()

app.use(express.static('public'))

import path from 'path'

//console.log(__dirname)

// Cant do this ever... must read as a file
// import packageJSON from './package.json'
// console.log(packageJSON)
// cant use this anymore in module type syntax
// require('./package.json')

import { incrementVisiitorCounter } from './geocitiesUtil.js'

app.get('/', (req, res) => {
  console.log('Visitors since the server started', incrementVisiitorCounter())
  // cant use __dirname as it only works in commonjs
  // res.sendFile(__dirname + '/public/frontpage.html')
  res.sendFile(path.resolve('./public/frontpage.html'))
})

app.get('/', (req, res) => {})

app.listen(8080, () => console.log('Server is running on', 8080))

// Reason to use type module instead of commonjs is because you can use the same syntax in backend and frontend.
