/* TODO get my dreams with modules */

import React, { useState, useEffect } from "react";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const MyDreams = (props) => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    get("/api/myDreams").then((x) => setDreams(x.reverse()));
  }, []);
  /* TODO: make container for dreams part eventually*/
  return (
    <div>
      <NavBar type="d" handleLogout={props.handleLogout} userId={props.userId} />
      <br />
      <br />
      <div className="allMyDreams">
        {dreams.map((dream) => (
          <DreamContainer
            date={dream.timeStamp}
            name={dream.author.name}
            content={dream.content}
            who="me"
          />
        ))}
      </div>
    </div>
  );
};

export default MyDreams;
