const { addClient, deleteClient } = require('./mutation')
const { client, clients } = require('./query')

module.exports = {
  addClient,
  deleteClient,
  client,
  clients
}