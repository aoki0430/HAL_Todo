import { objectType, extendType } from 'nexus'
import { prisma } from '../../lib/prisma'

export const Task = objectType({
  name: 'Task',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('title')
    t.nonNull.boolean('done')
  },
})

export const TasksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('tasks', {
      type: 'Task',
      resolve(_parent, _args, ctx) {
        return prisma.task.findMany()
      },
    })
  },
 
})
