import React, { useState } from "react";

import "./App.css";
import Project from "./components/Project/Project";
import ProjectList from "./components/Project/ProjectList";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  const [addProject, setAddProject] = useState();
  const [isInput, setIsInput] = useState(false);

  const addProjectHandler = (pName) => {
    setIsInput(true);
    setAddProject((prevProject) => {
      return [...prevProject, { id: Math.random().toString(), name: pName }];
    });
  };

  const redirectHandler = () => {
    setIsInput(false);
  };

  let content;

  if (!isInput) {
    content = (
      <div>
        <Project onAddProject={addProjectHandler} />
        <Tasks onAddProject={addProjectHandler} />
      </div>
    );
  }
  return (
    <div className="App">
      {content}
      {isInput && (
        <ProjectList projectName={addProject} onPressBack={redirectHandler} />
      )}
    </div>
  );
};

export default App;
