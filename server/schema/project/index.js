const { addProject, deleteProject } = require('./mutation')
const { project, projects } = require('./query')

module.exports = {
  addProject,
  deleteProject,
  project,
  projects
}