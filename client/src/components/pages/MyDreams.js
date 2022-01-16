/* TODO get my dreams with modules */

import React, { useState, useEffect } from "react";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const MyDreams = (props) => {

  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    get("/api/dreams", {parent: [props.userId]}).then((x) => setDreams(x.reverse()));
  }, []);

  return (
    <div>
      <NavBar type="d" handleLogout={props.handleLogout} userId={props.userId}/>
      <br />
      <br />
      {dreams.map((dream) => (
        <DreamContainer
          date={dream.timeStamp}
          name={dream.author.name}
          content={dream.content}
          who="me"
        />
      ))}
    </div>
  );
};

export default MyDreams;
