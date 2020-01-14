const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const ComidaType = new GraphQLObjectType({
  name: 'ComidaType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString }
  })
});

module.exports = ComidaType;
