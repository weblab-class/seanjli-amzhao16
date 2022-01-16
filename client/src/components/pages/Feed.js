/* TODO make feed page */

import React, { useState, useEffect } from "react";
import { GetDream } from "../modules/dreams/GetDream";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";

const Feed = (props) => {
  const dreams = GetDream({});
  return (
    <div>
      <NavBar type="f" handleLogout={props.handleLogout} />
      <br />
      <br />
      {dreams.map((dream) => (
        <DreamContainer
          date={dream.timeStamp}
          name={dream.author.name}
          content={dream.content}
          who="friends"
        />
      ))}
    </div>
  );
};

export default Feed;
