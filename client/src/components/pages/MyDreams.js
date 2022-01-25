import React, { useState, useEffect } from "react";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";
import "./MyDreams.css";

import { get, post } from "../../utilities.js";

const MyDreams = (props) => {
  const [dreams, setDreams] = useState([]);
  const [displayedDreams, setDisplayedDreams] = useState([]);
  const [me, setMe] = useState([{ usedTags: [] }]);
  const [usedTags, setUsedTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const deleteDream = (id) => {
    post("/api/deleteDream", { dream_id: id });
    setDreams(dreams.filter((x) => x._id != id));
  };

  const clickTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((x) => x !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  useEffect(() => {
    get("/api/myDreams").then((x) => setDreams(x.reverse()));
    get("/api/getMe").then((x) => setMe(x));
  }, []);

  useEffect(() => {
    setUsedTags(me[0].usedTags);
  }, [me]);

  useEffect(() => {
    setDisplayedDreams(dreams);
  }, [dreams]);

  useEffect(() => {
    setDisplayedDreams(
      dreams
        .filter((dream) => tags.every((tag) => dream.tags.includes(tag)))
        .filter((dream) => JSON.parse(dream.content).blocks[0].text.includes(search))
    );
  }, [tags, search]);

  return (
    <div className="myDreamsBackground">
      <NavBar type="d" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="searchDreamsContainer">
        search:
        <div className="magnifyingGlassDreams"></div>
        <input
          className="searchBarDreams"
          autocomplete="off"
          value={search}
          onChange={handleChange}
        ></input>
      </div>
      <div className="filterContainer">
        <div className="filterTitle">filters:</div>
        <div className="filterBox">
          {usedTags.map((tag) =>
            tags.includes(tag) ? (
              <button className="chosenTag" onClick={() => clickTag(tag)}>
                {tag}
              </button>
            ) : (
              <button className="unchosenTag" onClick={() => clickTag(tag)}>
                {tag}
              </button>
            )
          )}
        </div>
      </div>
      <div className="allMyDreams">
        {dreams.length === 0 ? (
          <div className="noDreams">you have no dreams. write one!</div>
        ) : displayedDreams.length === 0 ? (
          <div className="noDreams">you have no dreams with all the selected filters</div>
        ) : (
          <div>
            {displayedDreams.map((dream) => (
              <DreamContainer
                id={dream._id}
                date={dream.timeStamp}
                name={dream.author.name}
                content={dream.content}
                tags={dream.tags}
                private={dream.private}
                author_id={dream.author._id}
                deleteDream={() => deleteDream(dream._id)}
                who="me"
                clickTag={clickTag}
                usedTags={tags}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDreams;
