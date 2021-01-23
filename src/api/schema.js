const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const usersAttributos = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User{
        ${usersAttributos}
    }

    type Query{
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput{
        ${usersAttributos}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})