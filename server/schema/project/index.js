const { addProject, deleteProject, updateProject } = require('./mutation')
const { project, projects } = require('./query')

module.exports = {
  addProject,
  deleteProject,
  updateProject,
  project,
  projects
}