import { GraphQLServer } from 'graphql-yoga'

/*  Scalar Types: String    Boolean   Int   Float   ID(for uniq identifier)    */

const typeDefs = `
  type Query {
    id: ID!
    name: String!
    age: Int!
    isDeveloper: Boolean!
    salary: Float
  }
`

const resolvers = {
  Query: {
    id() {
      return `this is an id`
    },
    name() {
      return `Belhassen Gharsallah you can call me bel7aG`
    },
    age() {
      return 23
    },
    isDeveloper() {
      return true
    },
    salary() {
      return null
    }
  }
}

const myServer = new GraphQLServer({
  typeDefs,
  resolvers
})

myServer.start(() => {
  console.log('GraphQL server up running')
})
