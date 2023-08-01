import React from "react";

import Navigation from "./Navigation";
import classes from "./Mainheader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Time Tracker Application</h1>
      <Navigation isAdded={props.isAdded} onLogout={props.onPressBack} />
    </header>
  );
};

export default MainHeader;
