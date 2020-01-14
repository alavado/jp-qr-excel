const express = require('express')
const models = require('./models')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')

const app = express()

const cors = require('cors')
app.use(cors())
app.options('*', cors())

mongoose.connect(require('./secret').mongoURI)
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error))

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

const ip = require('ip').address()
if (ip === '45.55.54.91') {
  const https = require('https')
  const fs = require('fs')
  const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/compsci.cl-0001/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/compsci.cl-0001/fullchain.pem')
  }
  https.createServer(options, app).listen(4000, () => {
    console.log('Escuchando puerto (HTTPS):', 4000)
  })
}
else {
  console.log(`No estoy en el servidor (IP: ${ip})`);
  app.listen(4000, () => {
    console.log('Escuchando puerto:', 4000)
  })
}

