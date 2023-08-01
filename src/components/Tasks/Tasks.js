import React, { useState } from "react";

const Tasks = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTask.trim() !== "") {
      setTasks([...tasks, enteredTask]);
      setEnteredTask("");
      props.onAddProject(enteredTask);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="tasks">Task Name</label>
      <input
        onChange={taskChangeHandler}
        value={enteredTask}
        id="project"
        type="text"
      />
      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default Tasks;
