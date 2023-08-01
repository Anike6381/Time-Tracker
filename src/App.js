import React, { useEffect, useState } from "react";

import "./App.css";
import Project from "./components/Project/Project";
import ProjectList from "./components/Project/ProjectList";
import MainHeader from "./components/MainHeader/Mainheader";

const App = () => {
  const [addProject, setAddProject] = useState([]);
  const [isInput, setIsInput] = useState(false);
  let pId = Math.random().toString();

  useEffect(() => {
    let storedEntry = localStorage.getItem("RBL Bank Website Design");
    storedEntry = localStorage.getItem("Making a GitHub repo");
    storedEntry = localStorage.getItem("Learning React.js");
    if (storedEntry === pId) {
      setIsInput(true);
    }
  }, [pId]);

  const addProjectHandler = (pName) => {
    setIsInput(true);
    setAddProject((prevProjects) => {
      return [...prevProjects, { id: pId, name: pName }];
    });
    localStorage.setItem(pName, pId);
  };

  const redirectHandler = () => {
    setIsInput(false);
    localStorage.removeItem(addProject);
  };

  return (
    <React.Fragment>
      <MainHeader isAdded={isInput} onPressBack={redirectHandler} />
      <main>
        {!isInput && <Project onAddProject={addProjectHandler} />}
        {isInput && (
          <ProjectList projectName={addProject} onPressBack={redirectHandler} />
        )}
      </main>
    </React.Fragment>
  );
};

export default App;
