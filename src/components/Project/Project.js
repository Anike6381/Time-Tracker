import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Project.module.css";

const Project = (props) => {
  const [enteredProject, setEnteredProject] = useState("");

  const projectChangeHandler = (event) => {
    setEnteredProject(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddProject(enteredProject);
    setEnteredProject("");
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="project">Project Name</label>
          <input
            onChange={projectChangeHandler}
            value={enteredProject}
            id="project"
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Add Project
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Project;
