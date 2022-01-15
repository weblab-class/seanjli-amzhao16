import React, { useState, useEffect } from "react";
import "./DreamContainer.css";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import ReactDOM from "react-dom";
import { convertFromRaw, convertToRaw } from "draft-js";

const DreamContainer = (props) => {
  /* EDITED HERE*/
  return (
    <div className="container">
      <p className="date">{convertDate(props.date)}</p>
      <strong className="name">{props.name}</strong>{" "}
      {/* <p className="content">{convertFromRaw(JSON.parse(props.content))}</p> */}
      <p className="content">{props.content}</p>
    </div>
  );
};

/* TODO: function to get date in mm/dd/yyyy format?? how to apply*/
function convertDate(date) {
  let dateNew = date.substring(5, 7) + "/" + date.substring(8, 10) + "/" + date.substring(0, 4);
  let hour = parseInt(date.substring(11, 13));
  let newTime = "";
  if (hour > 12) {
    hour = hour - 12;
    newTime = hour.toString() + date.substring(13, 19) + " PM";
  } else if (hour > 9) {
    newTime = hour.toString() + date.substring(13, 19) + " AM";
  } else {
    hour = parseInt(date.substring(12, 13));
    newTime = hour.toString() + date.substring(13, 19) + " AM";
  }
  return "Posted on " + dateNew + " at " + newTime;
}
export default DreamContainer;
