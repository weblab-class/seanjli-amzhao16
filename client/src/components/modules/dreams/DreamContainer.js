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
  const [showDelete, setShowDelete] = useState(false);
  const deletePopUp = (event) => {
    if (showDelete === false) {
      setShowDelete(true);
    }
  };
  const deletePopDown = (event) => {
    if (showDelete === true) {
      setShowDelete(false);
    }
  };
  const deleteAndHide = (event) => {
    props.deleteDream();
    if (showDelete === true) {
      setShowDelete(false);
    }
  };

  return (
    <div>
      {props.who === "me" ? (
        <div className="containerMe">
          <div className="subcontainerMe">
            <p className="avatarMe"></p>
            <p className="dateMe">{convertDate(props.date)}</p>

            <h6>TAGS:</h6> {props.tags.map((tag) => <p>{tag}</p>)}

            <strong className="nameMe">{props.name}</strong>{" "}
            <p className="contentMe">
              {Parser(stateToHTML(convertFromRaw(JSON.parse(props.content))))}
            </p>
            <button className="deleteButtonMe" value="delete" onClick={deletePopUp}>
              delete dream
            </button>
            {showDelete ? (
              <div className="deletePopUpContainer">
                Are you sure you want to delete your dream?
                <button className="yesDelete" value="delete" onClick={deleteAndHide}>
                  yes
                </button>
                <button className="noDelete" onClick={deletePopDown}>
                  no
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
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
