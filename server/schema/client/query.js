const { ClientType } = require('./type')
const { GraphQLList, GraphQLID } = require('graphql')
const Client = require('../../models/Client')

const clients = {
  type: new GraphQLList(ClientType),
  resolve(parent, args) {
    return Client.find()
  }
}
const client = {
  type: ClientType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Client.findById(args.id)
  }
}

module.exports ={
  clients,
  client
}