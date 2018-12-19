import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    who: User!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    isStudent: Boolean!
  }
`

const resolvers = {
  Query: {
    who() {
      return {
        id: '1231322',
        name: 'Belhassen Gharsallah',
        age: 23,
        isStudent: true
      }
    }
  }
}

const myServer = new GraphQLServer({
  typeDefs,
  resolvers
})

myServer.start(() => {
  console.log('server Running')
})
