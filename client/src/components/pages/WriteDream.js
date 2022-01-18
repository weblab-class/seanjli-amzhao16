import React, { useState, useEffect } from "react";
import SubmitDream from "../modules/dreams/SubmitDream.js";
import EditTags from "../modules/tags/EditTags.js";
import "./WriteDream.css";
import NavBar from "../modules/NavBar.js";
import moment from "moment";

import { get, post } from "../../utilities.js";

const WriteDream = (props) => {
  // const currentTime = moment().local();
  const currHour = parseInt(moment().format().substring(11, 13));

  const [privacy, setPrivacy] = useState(false);

  const [tags, setTags] = useState([]);

  const [me, setMe] = useState([{ usedTags: [] }]);

  useEffect(() => {
    get("/api/getMe").then((x) => setMe(x));
  }, []);

  const [usedTags, setUsedTags] = useState([]);

  useEffect(() => {
    setUsedTags(me[0].usedTags);
  }, [me]);

  const [tagInput, setTagInput] = useState("");

  const handleChange = (event) => {
    setTagInput(event.target.value);
  };

  const addNewTag = () => {
    if (tagInput === "") { return; }
    if (!(tags.includes(tagInput))) {
      console.log("adding tag...");
    if (usedTags.includes(tagInput)) {
      addUsedTag(tagInput);
    } else {
      setTags([...tags, tagInput]);
      post("/api/addUsedTag", { tag: tagInput });
    }
    setTagInput("");
  }
  };

  const addUsedTag = (tag) => {
    setTags([...tags, tag]);
    setUsedTags(usedTags.filter((x) => x !== tag));
  };

  const removeTag = (tag) => {
    setTags(tags.filter((x) => x !== tag));
    setUsedTags([...usedTags, tag]);
  };

  console.log("tags:");
  console.log(tags);
  console.log("used tags:");
  console.log(usedTags);

  const togglePrivacy = (event) => {
    setPrivacy(!privacy);
  };

  return (
    <div>
      <NavBar type="w" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="writing">
        <div className="writeTitle">
          {3 < currHour < 12 ? (
            <em className="greeting">good morning!</em>
          ) : 12 <= currHour < 18 ? (
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
        <SubmitDream privacy={privacy} tags={tags} />
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

      <br />
      <br />
      <br />
      <EditTags
        tags={tags}
        removeTag={removeTag}
        tagInput={tagInput}
        handleChange={handleChange}
        addNewTag={addNewTag}
        usedTags={usedTags}
        addUsedTag={addUsedTag}
      />
    </div>
  );
};

export default WriteDream;
