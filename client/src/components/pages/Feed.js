/* TODO make feed page */

import React, { useState, useEffect } from "react";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const Feed = (props) => {

  const [dreams, setDreams] = useState([]);
  const [me, setMe] = useState([{friends : [], id : ""}]);

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    get("/api/getMe").then((x) => setMe(x));
  }, []);

  useEffect(() => {
    setFriends(me[0].friends);
  }, [me])

  useEffect(() => {
    get("/api/dreams", {parent: friends}).then((x) => setDreams(x.reverse()));
  }, [me, friends]);

  return (
    <div>
      <NavBar type="f" handleLogout={props.handleLogout} />
      <br />
      <br />
      {dreams.map((dream) => (
        <DreamContainer date={dream.timeStamp} name={dream.author.name} content={dream.content} />
      ))}
    </div>
  );
};

export default Feed;
