import React, { useState } from "react";

const Project = (props) => {
  const [enteredProject, setEnteredProject] = useState("");
  const [projects, setProjects] = useState([]);

  const projectChangeHandler = (e) => {
    setEnteredProject(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredProject.trim() !== "") {
      setProjects([...projects, enteredProject]);
      setEnteredProject("");
    }
    props.onAddProject(enteredProject);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="project">Project Name</label>
      <input
        onChange={projectChangeHandler}
        value={enteredProject}
        id="project"
      />
      <div>
        <button type="submit">Add Project</button>
      </div>
    </form>
  );
};

export default Project;
