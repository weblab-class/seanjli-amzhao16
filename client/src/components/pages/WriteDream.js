import React, { useState, useEffect } from "react";
import SubmitDream from "../modules/dreams/SubmitDream.js";
import "./WriteDream.css";
import NavBar from "../modules/NavBar.js";
import moment from "moment";

const WriteDream = (props) => {
  // const currentTime = moment().local();
  const currHour = parseInt(moment().format().substring(11, 13));

  const [privacy, setPrivacy] = useState(false);

  const togglePrivacy = (event) => {
    setPrivacy(!privacy);
    console.log("privacy toggled!");
  };

  /* TODO make public/private toggle */
  return (
    <div>
      <NavBar type="w" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="writing">
        <div className="writeTitle">
          {currHour < 12 ? (
            <em className="greeting">good morning!</em>
          ) : currHour < 18 ? (
            <em className="greeting">good afternoon!</em>
          ) : (
            <em className="greeting">good evening!</em>
          )}
          <em className="currentDate">{moment().format("ll")}</em>
        </div>
        <div>
          <em className="italic"> italic</em>
          <u className="underline"> underline</u>
          <p className="key1">Cmd</p>
          <p className="plus1">+</p>
          <p className="key2">i</p>
          <p className="key3">Cmd</p>
          <p className="plus2">+</p>
          <p className="key4">u</p>
        </div>
        <SubmitDream privacy={privacy} />
        {privacy ? (
          <button value="privacy" onClick={togglePrivacy}>
            <p className="toggleContainer">
              <p className="privateText">private</p>
              <p className="privateCircle"></p>
            </p>
          </button>
        ) : (
          <button value="privacy" onClick={togglePrivacy}>
            <p className="toggleContainer">
              <p className="publicText">public</p>
              <p className="publicCircle"></p>
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default WriteDream;
