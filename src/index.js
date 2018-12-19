import { GraphQLServer } from 'graphql-yoga'

                        /* step 1: Type Defenition */
const typeDefs = `
  type Query {
    hello: String!
  }
`
// ! for in hello means that hello always get a string
                        /* step 2: Resolvers */
const resolvers = {
  Query: {
    hello() {
      return 'this is my first Query im so excited'
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
