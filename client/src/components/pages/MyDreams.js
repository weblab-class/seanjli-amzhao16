/* TODO get my dreams with modules */

import React, { useState, useEffect } from "react";
import { GetDream } from "../modules/dreams/GetDream";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";

const MyDreams = (props) => {
  const dreams = GetDream().filter((dream) => dream.author._id === props.userId);
  return (
    <div>
      <NavBar type="d" handleLogout={props.handleLogout} />
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
