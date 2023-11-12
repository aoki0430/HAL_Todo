import { prisma } from '../lib/prisma'

export const resolvers = {
  Query: {
    tasks: (parent, args, context, info) => {
      return prisma.task.findMany()
    }
  },

  Mutation: {
    addTask: (parent, args, context, info) => {
      const { title } = args.input;
      return prisma.task.create(
        {
          data: {
            title,
          }
        }
      )
    },

    deleteTask: (parent, { id }, context, info) => {
      return prisma.task.delete(
        {
          where: { id },
        }
      )
    },
  },
}
