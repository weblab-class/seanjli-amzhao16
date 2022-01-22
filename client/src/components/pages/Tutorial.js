import React from "react";
import "./Tutorial.css";

const Tutorial = (props) => {
  return (
    <div>
      <a className="exitTutorial" href="/">
        exit
      </a>
      <div className="tutorialContainer"></div>
    </div>
  );
};

export default Tutorial;
