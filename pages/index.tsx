import type { NextPage } from 'next'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'

const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      done
    }
  }
`

const ToggleTaskMutation = gql`
  mutation ToggleTask($id: ID!) {
    toggleTask(id: $id) {
      id
      done
    }
  }
`

const toggleTaskDone = (checked) => {
  
}

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(AllTasksQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
      <>
        <h1>SIMPLE TASK LIST</h1>
        <ul className="list-none">
          {data.tasks.map((task) => (
            <li key={task.id}>
	    <label htmlFor={`task-${task.id}`}>
	      <input id="task-done-status" type="checkbox" checked={task.done}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              {task.title}
            </label>
            </li>
          ))}
        </ul>
      </>
  )
}

export default Home
