import React from "react";
import Tasks from "../Tasks/Tasks";
import Card from "../UI/Card";
import classes from "./ProjectList.module.css";

const ProjectList = (props) => {
  return (
    <Card className={classes["project-list"]}>
      {props.projectName.map((project) => {
        return (
          <ul>
            <li key={project.id}>
              {
                (localStorage.getItem("RBL Bank Website Design"),
                localStorage.getItem("Making a GitHub repo"),
                localStorage.getItem("Learning React.js") ? (
                  <h1>{project.name}</h1>
                ) : (
                  <h1>No project found</h1>
                ))
              }
              <Tasks tasks={project.name} />
            </li>
          </ul>
        );
      })}
    </Card>
  );
};

export default ProjectList;
