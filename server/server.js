const express = require('express')
const models = require('./models')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')

const app = express()

const MONGO_URI = require('./secret').MONGO_URI
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}
mongoose.connect(MONGO_URI)
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error))

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Listening')
})
