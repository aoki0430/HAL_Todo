import { prisma } from "../lib/prisma";

export const resolvers = {
  Query: {
    tasks: () => {
      return prisma.task.findMany();
    },
  },

  Mutation: {
    addTask: (parent: undefined, args: { input: { title: string } }) => {
      if (!args.input || !args.input.title) {
        throw new Error("Title is required");
      }

      const { title } = args.input;

      return prisma.task.create({
        data: {
          title,
        },
      });
    },

    deleteTask: (parent: undefined, args: { id: number }) => {
      const { id } = args;

      return prisma.task.delete({
        where: { id },
      });
    },

    toggleTaskDone: (
      parent: undefined,
      args: { id: number; done: boolean }
    ) => {
      const { id, done } = args;
      return prisma.task.update({
        data: { done },
        where: { id },
      });
    },
  },
};
