export const typeDefs = `#graphql
  type Task {
    id: Int
    title: String
    done: Boolean
  }
  
  type Query {
    tasks: [Task]!
  }

  type Mutation {
    addTask(input: AddTaskInput) : Task
    deleteTask(id: Int) : Task
  }

  input AddTaskInput {
    title: String
  }

`


