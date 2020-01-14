const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const TrabajadorType = new GraphQLObjectType({
  name: 'TrabajadorType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    cargo: { type: GraphQLString },
    organizacion: { type: GraphQLString },
    telefono: { type: GraphQLString },
    email: { type: GraphQLString }
  })
})

module.exports = TrabajadorType
