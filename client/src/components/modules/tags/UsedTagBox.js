import React from "react";
import "./TagBox.css";

const UsedTagBox = (props) => {
  return (
    <div>
      <button className="generalTag" onClick={props.addUsedTag}>
        {props.tag}
      </button>
    </div>
  );
};

export default UsedTagBox;
