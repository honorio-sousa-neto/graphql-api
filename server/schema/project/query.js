const { ProjectType } = require('./type')
const { GraphQLList, GraphQLID } = require('graphql')
const Project = require('../../models/Project')

const projects = {
  type: new GraphQLList(ProjectType),
  resolve(parent, args) {
    return Project.find()
  }
}
const project = {
  type: ProjectType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Project.findById(args.id)
  }
}

module.exports ={
  projects,
  project
}