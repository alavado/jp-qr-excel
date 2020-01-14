const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql
const mongoose = require('mongoose')
const Comida = mongoose.model('comida')
const Trabajador = mongoose.model('trabajador')
const ComidaType = require('./types/comida_type')
const TrabajadorType = require('./types/trabajador_type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    agregarComida: {
      type: ComidaType,
      args: {
        nombre: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return (new Comida(args)).save()
      }
    },
    eliminarComida: {
      type: ComidaType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Comida.remove({ _id: id })
      }
    },
    agregarTrabajador: {
      type: TrabajadorType,
      args: {
        nombre: { type: GraphQLString },
        cargo: { type: GraphQLString },
        organizacion: { type: GraphQLString },
        telefono: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return (new Trabajador(args)).save()
      }
    }
  }
})

module.exports = mutation
