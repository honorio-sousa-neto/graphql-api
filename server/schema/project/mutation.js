const { ProjectType } = require('./type')
const { GraphQLNonNull, GraphQLString, GraphQLEnumType, GraphQLID } = require('graphql')
const Project = require('../../models/Project')

const addProject = {
  type: ProjectType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    description:  { type: GraphQLNonNull(GraphQLString) },
    status: {
      type: new GraphQLEnumType({
        name: 'ProjectStatus',
        values: {
          'new': { value: 'Not started' },
          'progress': { value : 'In progress' },
          'completed': { value : 'Completed' }
        }
      }),
      defaultValue: 'Not Started'
    },
    clientId: { type: GraphQLNonNull(GraphQLID)}
  },
  resolve(parent, args) {
    const project = new Project({
      name: args.name,
      description: args.description,
      status: args.status,
      clientId: args.clientId
    })
    return project.save()
  }
}

const deleteProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve(parent, args) {
    return Project.findByIdAndRemove(args.id)
  }
}

const updateProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description:  { type: GraphQLString },
    status: {
      type: new GraphQLEnumType({
        name: 'ProjectStatusUpdate',
        values: {
          'new': { value: 'Not started' },
          'progress': { value : 'In progress' },
          'completed': { value : 'Completed' }
        }
      })
    },
    // clientId: { type: GraphQLID }
  },
  resolve(parent, args) {
    return Project.findByIdAndUpdate(
      args.id, 
      {
        $set: {
          name: args.name,
          description: args.description,
          status: args.status
        }
      },
      {
        new: true
      }  
    )
  }
}

module.exports ={
  addProject, deleteProject, updateProject
}