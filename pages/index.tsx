import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { Button, Form, Input, Menu, MenuProps, Checkbox, Divider } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
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

const AddTaskMutation = gql`
  mutation ($input: AddTaskInput!) {
    addTask(input: $input) {
      id
      title
      done
    }
  }
`;

const Home: NextPage = () => {
  const { data, loading, error, refetch } = useQuery(AllTasksQuery);
  const [toggleTaskDone, { loading: toggling, error: toggleError }] =
    useMutation(ToggleTaskMutation);
  const [addTaskDone, { loading: adding, error: addingError }] =
    useMutation(AddTaskMutation);
  const [form] = Form.useForm();

  const handleToggleTaskDone = async (
    event: CheckboxChangeEvent,
    taskId: number
  ) => {
    const newDoneStatus = event.target.checked;
    try {
      await toggleTaskDone({
        variables: {
          id: taskId,
          done: newDoneStatus,
        },
      });
    } catch (error) {
      console.error("Error toggling task", error);
    }
  };

  const onSubmitAddTask = async (title: string) => {
    try {
      console.log(title);
      await addTaskDone({
        variables: {
          input: {
            title: title,
          },
        },
      });
      form.resetFields();
      refetch();
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const [current, setCurrent] = useState("mail");
  const onClickTab: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "All",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Today",
      key: "app",
      icon: <AppstoreOutlined />,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const undoneTasks = [...data.tasks!].filter((task) => !task.done);
  const doneTasks = [...data.tasks!].filter((task) => task.done);

  return (
    <>
      <div className="mx-16 mt-8 flex flex-col">
        <Menu
          onClick={onClickTab}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Form
          form={form}
          className="my-4 flex w-2/3"
          onSubmitCapture={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const title = (event.currentTarget[0] as HTMLInputElement).value;
            onSubmitAddTask(title);
            form.resetFields();
          }}
        >
          <Form.Item name="taskTitle" className="flex-grow">
            <Input placeholder="write todo" />
          </Form.Item>
          <Button htmlType="submit" className="ml-2">
            Add
          </Button>
        </Form>
        <ul className="list-none">
          <Divider orientation="left" plain orientationMargin="0">
            Todo
          </Divider>
          {undoneTasks.map((task: task) => (
            <li key={task.id}>
              <Checkbox
                onChange={(event) => handleToggleTaskDone(event, task.id)}
                key={`task-${task.id}`}
                checked={task.done}
              >
                {task.title}
              </Checkbox>
            </li>
          ))}
          {/* {undoneTasks.length > 0 && doneTasks.length > 0 && ( */}
          <Divider orientation="left" plain orientationMargin="0">
            Completed
          </Divider>
          {/* )} */}
          {doneTasks.map((task) => (
            <li key={task.id} className="mb-2">
              <Checkbox
                onChange={(event) => handleToggleTaskDone(event, task.id)}
                key={`task-${task.id}`}
                checked={task.done}
                className="line-through"
              >
                {task.title}
              </Checkbox>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
