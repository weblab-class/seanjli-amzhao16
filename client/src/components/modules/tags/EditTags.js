import React, { useState } from "react";
import TagBox from "./TagBox.js";
import UsedTagBox from "./UsedTagBox.js";
import "./EditTags.css";

const EditTags = (props) => {
  const [showAboutTag, setShowAboutTag] = useState(false);
  const toggleAboutTags = (event) => {
    console.log("clicky");
    if (showAboutTag === true) {
      setShowAboutTag(false);
    } else {
      setShowAboutTag(true);
    }
  };
  return (
    <div>
      <button className="aboutTags" onClick={toggleAboutTags}>
        ?
      </button>
      {showAboutTag ? (
        <div className="aboutTagsBox">
          <div className="aboutTagQuestion1"> What are tags for? </div>
          <div className="aboutTagAnswer1">
            {" "}
            To sort dreams by various topics, and you can later filter by tag!
          </div>
          <div className="aboutTagQuestion2"> What tags should I make? </div>
          <div className="aboutTagAnswer2">
            {" "}
            Whatever you want! Suggestions include: specific places (Paris, a cafeteria, outer
            space), certain people (my sister, Taylor Swift), recurring events (flying!), themes
            (calm dreams, nightmares), etc.
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="editTagContainer">
        <div className="addTagContainer">
          {" "}
          <input
            className="addTagSearch"
            type="text"
            value={props.tagInput}
            onChange={props.handleChange}
            placeholder="type tag here"
          />
          <button className="addTagButton" onClick={props.addNewTag}>
            add new tag
          </button>
        </div>
        <div className="addedTagsLabel">added tags: (click to remove)</div>
        <div className="addedTagsContainer">
          {props.tags.map(
            (tag) => (
              <TagBox tag={tag} removeTag={() => props.removeTag(tag)} />
            )
            /*
            <div>
            <p>{tag}</p>
            <button onClick={() => props.removeTag(tag)}>remove</button>
            <br/>
            </div>*/
          )}
        </div>
        <div className="previousTagsLabel">previous tags: (click to add)</div>
        <div className="previousTagsContainer">
          {props.usedTags.map(
            (tag) => (
              <UsedTagBox tag={tag} addUsedTag={() => props.addUsedTag(tag)} />
            )
            /*
            <div>
            <button onClick={() => props.addUsedTag(x)}>{x} +</button>
            <br/>
            </div>
            */
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTags;
