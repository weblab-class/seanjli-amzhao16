import React, { useState, useEffect } from "react";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const MyDreams = (props) => {
  const [dreams, setDreams] = useState([]);
  
  const deleteDream = (id) => {
    post("/api/deleteDream", {dream_id: id});
    setDreams(dreams.filter((x) => x._id != id));
  }

  useEffect(() => {
    get("/api/myDreams").then((x) => setDreams(x.reverse()));
  }, []);
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
            tags={dream.tags}
            deleteDream={() => deleteDream(dream._id)}
            who="me"
          />
        ))}
      </div>
    </div>
  );
};

export default MyDreams;
