import type { NextPage } from "next";
import { useState } from "react";
import { Button, Form, Input, Menu, MenuProps, Checkbox } from "antd";
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

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(AllTasksQuery);
  const [toggleTaskDone, { loading: toggling, error: toggleError }] =
    useMutation(ToggleTaskMutation);
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
      <div className="ml-8 mt-8">
        <Menu
          onClick={onClickTab}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <div className="mt-8">
          <div className="flex">
            <Form
              labelCol={{ span: 48 }}
              wrapperCol={{ span: 48 }}
              style={{ maxWidth: 600 }}
            >
              <Form.Item>
                <Input placeholder="write todo" />
              </Form.Item>
            </Form>

            <Button htmlType="submit">Add</Button>
          </div>
          <ul className="list-none">
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
            {undoneTasks.length > 0 && doneTasks.length > 0 && (
              <li>
                <hr className="my-4 border-t border-gray-300" />
              </li>
            )}
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
      </div>
    </>
  );
};

export default Home;
