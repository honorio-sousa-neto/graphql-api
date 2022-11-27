const { addClient, deleteClient, client, clients } = require('./client')
const { addProject, deleteProject, updateProject, project, projects } = require('./project')
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
    deleteProject,
    updateProject
  }
})

module.exports = new GraphQLSchema({
  query,
  mutation 
})