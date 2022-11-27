const { addClient, deleteClient, client, clients } = require('./client')
const { addProject, deleteProject, project, projects } = require('./project')
const { GraphQLObjectType, GraphQLSchema } = require('graphql')

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects,
    project,
    clients,
    client
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation', 
  fields: {
    addClient,
    deleteClient,
    addProject,
    deleteProject
  }
})

module.exports = new GraphQLSchema({
  query,
  mutation 
})