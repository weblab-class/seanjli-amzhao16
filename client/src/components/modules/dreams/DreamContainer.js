import React, { useState, useEffect } from "react";
import "./DreamContainer.css";
import "draft-js/dist/Draft.css";
import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { formatInTimeZone } from "date-fns-tz";
import Parser from "html-react-parser";

import { get, post } from "../../../utilities";


const DreamContainer = (props) => {
  const [showDelete, setShowDelete] = useState(false);

  const [privacy, setPrivacy] = useState(false);

  useEffect(() => {
    setPrivacy(props.private)
  }, []);

  const togglePrivacy = () => {
    post("/api/togglePrivacy", {dream_id: props.id});
    setPrivacy(!privacy);
  }

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
          {privacy ? 
          <button onClick={togglePrivacy}>make public</button> : 
          <button onClick={togglePrivacy}>make private</button>}
          <div className="subcontainerMe">
            <p className="avatarMe"></p>
            <p className="dateMe">{convertDate(props.date)}</p>
            {privacy ? (
              <div className="privateSymbol"></div>
            ) : (
              <div className="publicSymbol"></div>
            )}{" "}
            {props.tags.length === 0 ? (
              <div className="noTags">no tags</div>
            ) : (
              <div className="tagsBox">
                <div>
                  {props.tags.map((tag) => (
                    <p className="indivTag">{tag}</p>
                  ))}
                </div>
              </div>
            )}
            <strong className="nameMe">{props.name}</strong>{" "}
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
            <p className="contentMe">
              {Parser(stateToHTML(convertFromRaw(JSON.parse(props.content))))}
            </p>
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
