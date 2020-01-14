const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql
const mongoose = require('mongoose')
const Comida = mongoose.model('comida')
const ComidaType = require('./types/comida_type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    agregarComida: {
      type: ComidaType,
      args: {
        nombre: { type: GraphQLString }
      },
      resolve(parentValue, { nombre }) {
        return (new Comida({ nombre })).save()
      }
    },
    eliminarComida: {
      type: ComidaType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Comida.remove({ _id: id })
      }
    }
  }
})

module.exports = mutation
