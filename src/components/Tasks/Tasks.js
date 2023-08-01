import React from "react";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  const t1 = 3;
  const t2 = 2;
  const t3 = 1.5;
  localStorage.getItem(props.header);
  if (props.tasks === "RBL Bank Website Design") {
    return (
      <div className={classes.tasks}>
        <li>{`You have spent ${t1} hrs on Search Component`}</li>
        <li>{`You have spent ${t2} hrs on Responsive Web Design`}</li>
        <li>{`You have spent ${t3} hrs on Deployment`}</li>
        <p className={classes.text}>Total Time Spent: </p>
        <li className={classes.total}>{`You have spent total ${
          t1 + t2 + t3
        } hrs on this Project`}</li>
      </div>
    );
  }
  if (props.tasks === "Making a GitHub repo") {
    return (
      <div className={classes.tasks}>
        <li>{`You have spent ${t1} hrs making GitHub account`}</li>
        <li>{`You have spent ${t2} hrs on Uploading files`}</li>
        <li>{`You have spent ${t3} hrs on Committing changes`}</li>
        <p className={classes.text}>Total Time Spent: </p>
        <li className={classes.total}>{`You have spent total ${
          t1 + t2 + t3
        } hrs on this Project`}</li>
      </div>
    );
  }
  if (props.tasks === "Learning React.js") {
    return (
      <div className={classes.tasks}>
        <li>{`You have spent ${t1} hrs on Components module`}</li>
        <li>{`You have spent ${t2} hrs on Props concept`}</li>
        <li>{`You have spent ${t3} hrs on State`}</li>
        <p className={classes.text}>Total Time Spent: </p>
        <li className={classes.total}>{`You have spent total ${
          t1 + t2 + t3
        } hrs on this Project`}</li>
      </div>
    );
  }

  let error;

  if (!props.tasks) {
    error = <h3>Tasks are not rendered</h3>;
  }
  return <div>{error}</div>;
};

export default Tasks;
