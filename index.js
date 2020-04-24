const express = require('express')
const data = require('./data.json')

console.log('data test:', data)

const app = express()

const port = 4000

const onListen = () => {
  console.log(`Listening on ${port}`)
}

app.get(
  '/',
  (request, response) => {
    response.send(data)
  }
)

app.get(
  '/user/:name',
  (request, response) => {
    // const name = request.params.name
    // const name = request.params['name']
    const { name } = request.params

    console.log('name test:', name)

    const user = data[name]

    response.send(user)
  }
)

app.listen(port, onListen)