import React from "react";

const ProjectList = (props) => {
  return (
    <div className="project-list">
      {props.projectName.map((project) => {
        return <li key={project.id}>{project.name}</li>;
      })}
    </div>
  );
};

export default ProjectList;
