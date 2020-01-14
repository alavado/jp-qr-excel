const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ComidaSchema = new Schema({
  nombre: { type: String }
})

mongoose.model('comida', ComidaSchema)
