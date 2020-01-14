const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrabajadorSchema = new Schema({
  nombre: { type: String },
  cargo: { type: String },
  organizacion: { type: String },
  direccion: { type: String },
  telefono: { type: String },
  email: { type: String }
})

mongoose.model('trabajador', TrabajadorSchema)
