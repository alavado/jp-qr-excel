const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql
const ComidaType = require('./comida_type')
const Comida = mongoose.model('comida')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    comidas: {
      type: new GraphQLList(ComidaType),
      resolve() {
        return Comida.find({})
      }
    },
  }
})

module.exports = RootQueryType
