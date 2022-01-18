import React from "react";
import "./TagBox.css";

const TagBox = (props) => {
  return (
    <div>
      <button className="generalTag" onClick={props.removeTag}>
        {props.tag}
      </button>
    </div>
  );
};

export default TagBox;
