import type { NextPage } from "next";
import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";
import { task } from "@prisma/client";

const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      done
    }
  }
`;

const ToggleTaskMutation = gql`
  mutation ($id: Int, $done: Boolean) {
    toggleTaskDone(id: $id, done: $done) {
      id
      title
      done
    }
  }
`;

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(AllTasksQuery);
  const [toggleTaskDone, { loading: toggling, error: toggleError }] =
    useMutation(ToggleTaskMutation);

  const handleToggleTaskDone = async (
    event: React.ChangeEvent<HTMLInputElement>,
    taskId: number
  ) => {
    const newDoneStatus = event.target.checked;
    try {
      await toggleTaskDone({
        variables: {
          id: taskId,
          done: newDoneStatus,
        },
        // optimisticResponse: {
        //   __typename: "Mutation",
        //   toggleTaskDone: {
        //     __typename: "Task",
        //     id: taskId,
        //     title: "This is a temporary title",
        //     done: newDoneStatus,
        //   },
        // },
      });
    } catch (error) {
      console.error("Error toggling task", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const undoneTasks = [...data.tasks!].filter((task) => !task.done);
  const doneTasks = [...data.tasks!].filter((task) => task.done);

  return (
    <>
      <h1>SIMPLE TASK LIST</h1>
      <ul className="list-none">
        {undoneTasks.map((task: task) => (
          <li key={task.id}>
            <label htmlFor={`task-${task.id}`}>
              <input
                id="task-done-status"
                type="checkbox"
                checked={task.done}
                onChange={(event) => handleToggleTaskDone(event, task.id)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              {task.title}
            </label>
          </li>
        ))}
        {undoneTasks.length > 0 && doneTasks.length > 0 && (
          <li>
            <hr className="my-4 border-t border-gray-300" />
          </li>
        )}
        {doneTasks.map((task) => (
          <li key={task.id} className="mb-2">
            <label
              htmlFor={`task-${task.id}`}
              className="flex items-center gap-2"
            >
              <input
                id={`task-${task.id}`}
                type="checkbox"
                checked={task.done}
                onChange={(event) => handleToggleTaskDone(event, task.id)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="line-through">{task.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
