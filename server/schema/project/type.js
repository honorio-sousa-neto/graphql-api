const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')
const { ClientType } = require('../client/type')
const Client = require('../../models/Client')

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: { 
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId)
      }
    }
  })
})

module.exports ={
  ProjectType
}