import { GraphQLServer } from 'graphql-yoga'

                        /* step 1: Type Defenition  (SCHEMA) */
/*  Scalar Types: String    Boolean   Int   Float   ID(for uniq identifier)    */
const typeDefs = `
  type Query {
    hello: String!,
    name: String!,
    location: String!,
    bio: String!
  }
`
// ! for in hello means that hello always get a string

                        /* step 2: Resolvers */
const resolvers = {
  Query: {
    hello() {
      return `this is my first Query im so excited`
    },
    name() {
      return `Belhassen Gharsallah`
    },
    location() {
      return `Tunisia, Rades`
    },
    bio() {
      return `Love Javascript he can do anything`
    }
  }
}

                          /*step 3: Create GraphQL Server  */

const myServer = new GraphQLServer({
  typeDefs,
  resolvers
})

myServer.start(() => {
  console.log('the server is Running!')
})
