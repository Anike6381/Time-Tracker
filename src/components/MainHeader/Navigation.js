import React from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isAdded && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isAdded && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isAdded && (
          <li>
            <button onClick={props.onLogout}>Back</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
