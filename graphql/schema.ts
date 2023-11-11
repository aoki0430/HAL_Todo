export const typeDefs = `#graphql
  type Task {
    id: Int
    title: String
    done: Boolean
  }
  
  type Query {
    tasks: [Task]!
  }
`


