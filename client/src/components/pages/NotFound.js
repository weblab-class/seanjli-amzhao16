import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1 className="ohNo">oh no!</h1>
      <p className="dneNotFound">
        this page doesn't seem to exist. try going to the following link and logging in
      </p>
      <div className="itWontCenterTheLink">
        <a className="dneNotFound" href="https://dream-logbook.herokuapp.com">
          {" "}
          https://dream-logbook.herokuapp.com
        </a>
      </div>
    </div>
  );
};

export default NotFound;
