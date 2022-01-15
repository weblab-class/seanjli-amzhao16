/* TODO make WriteDream page with modules */

import React, { useState, useEffect } from "react";
import SubmitDreamButton from "../modules/dreams/SubmitDreamButton.js";
import SubmitDream from "../modules/dreams/SubmitDream.js";
import "./WriteDream.css";
import NavBar from "../modules/NavBar.js";
import moment from "moment";

const WriteDream = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // const currentTime = moment().local();
  const currHour = parseInt(moment().format().substring(11, 13));

  return (
    <div>
      <NavBar type="w" handleLogout={props.handleLogout} />
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
        <SubmitDream />
      </div>
    </div>
  );
};

export default WriteDream;
