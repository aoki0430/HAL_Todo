import { prisma } from '../lib/prisma'

export const resolvers = {
  Query: {
    tasks: (parent, args, context, info) => {
      return prisma.task.findMany()
    }
  }
}
