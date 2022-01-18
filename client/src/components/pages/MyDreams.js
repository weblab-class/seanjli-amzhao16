import React, { useState, useEffect } from "react";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const MyDreams = (props) => {
  const [dreams, setDreams] = useState([]);
  const [displayedDreams, setDisplayedDreams] = useState([]);
  const [me, setMe] = useState([{usedTags: []}]);
  const [usedTags, setUsedTags] = useState([]);
  const [tags, setTags] = useState([]);

  const deleteDream = (id) => {
    post("/api/deleteDream", {dream_id: id});
    setDreams(dreams.filter((x) => x._id != id));
  }

  const clickTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((x) => x !== tag));
    } else {
      setTags([...tags, tag]);
    }
  }

  useEffect(() => {
    get("/api/myDreams").then((x) => setDreams(x.reverse()));
    get("/api/getMe").then((x) => setMe(x));
  }, []);

  useEffect(() => {
    setUsedTags(me[0].usedTags);
  }, [me]);

  useEffect(() => {
    setDisplayedDreams(dreams);
  }, [dreams])

  useEffect(() => {
    setDisplayedDreams(dreams.filter((dream) =>
    tags.every(tag => dream.tags.includes(tag)))
    )
  }, [tags])

  return (
    <div>
      <NavBar type="d" handleLogout={props.handleLogout} userId={props.userId} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {usedTags.map((tag) => 
          tags.includes(tag) ?
          <button onClick={() => clickTag(tag)}>remove {tag}</button> : 
          <button onClick={() => clickTag(tag)}>add {tag}</button>
        )}
      </div>
      <div className="allMyDreams">
        {displayedDreams.map((dream) => (
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
