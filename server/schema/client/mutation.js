const { ClientType } = require('./type')
const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql')
const Client = require('../../models/Client')

const addClient = {
  type: ClientType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {

    const c = new Client({
      name: args.name,
      email: args.email,
      phone: args.phone
    })
    return c.save()
  }
}

const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve(parent, args) {
    return Client.findByIdAndRemove(args.id)
  }
}

module.exports = {
  addClient,
  deleteClient
}