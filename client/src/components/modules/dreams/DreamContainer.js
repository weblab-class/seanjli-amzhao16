import React, { useState, useEffect } from "react";
import "./DreamContainer.css";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { convertFromRaw, convertToRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { formatInTimeZone } from "date-fns-tz";
/* TODO: Adjust date for other things i.e. friends reqs, comments, etc. */
import Parser from "html-react-parser";

const DreamContainer = (props) => {
  return (
    <div>
      {props.who === "me" ? (
        <div className="containerMe">
          <div className="subcontainerMe">
            <p className="avatarMe"></p>
            <p className="dateMe">{convertDate(props.date)}</p>
            <strong className="nameMe">{props.name}</strong>{" "}
            <p className="contentMe">
              {Parser(stateToHTML(convertFromRaw(JSON.parse(props.content))))}
            </p>
          </div>
          <button value="delete" onClick={props.deleteDream}>delete dream</button> 
        </div>
      ) : (
        <div className="container">
          <div className="subcontainer">
            <p className="avatar"></p>
            <strong className="name">{props.name}</strong>{" "}
            <p className="date">{convertDate(props.date)}</p>
            <p className="content">
              {Parser(stateToHTML(convertFromRaw(JSON.parse(props.content))))}
            </p>
          </div>
          {/* <p className="content">{props.content}</p> */}
        </div>
      )}
    </div>
  );
};

function convertDate(dateOld) {
  let date = formatInTimeZone(dateOld, "America/New_York", "yyyy-MM-dd HH:mm:ss zzz");
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
  return dateNew + " at " + newTime + " EST";
}
export default DreamContainer;
