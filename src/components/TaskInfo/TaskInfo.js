import React from "react";
import useData from "../../hooks/useData";
import InputTodo from "../InputTodo/InputTodo";
import Notes from "../Notes/Notes";

const TaskInfo = () => {
  const [tasks, setTasks] = useData([]);
  return (
    <div className="mt-20 mb-20">
      <InputTodo></InputTodo>
      {tasks.map((task) => (
        <Notes note={task} key={task.id}></Notes>
      ))}
    </div>
  );
};

export default TaskInfo;
