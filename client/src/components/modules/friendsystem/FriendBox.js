/* TODO prettify */

import React, { useState, useEffect } from "react";
import "./FriendBox.css";

const FriendBox = (props) => {
  const [showRemove, setShowRemove] = useState(false);
  const removePopUp = (event) => {
    if (showRemove === false) {
      setShowRemove(true);
    }
  };
  const removePopDown = (event) => {
    if (showRemove === true) {
      setShowRemove(false);
    }
  };
  const removeAndHide = (event) => {
    props.removeFriend(props.friend._id);
    if (showRemove === true) {
      setShowRemove(false);
    }
  };

  return (
    <div className="singleFriendBox">
      <a className="myFriendName" href={"/profile/" + props.friend._id}>
        {props.friend.name}
      </a>
      <button
        className="myFriendRemove"
        value={props.friend._id}
        // onClick={() => props.removeFriend(props.friend._id)}
        onClick={removePopUp}
      >
        remove
      </button>
      {showRemove ? (
        <div className="removePopUpContainer">
          Are you sure you want to remove {props.friend.name} as a friend?
          <button className="yesRemove" onClick={removeAndHide}>
            yes
          </button>
          <button className="noRemove" onClick={removePopDown}>
            no
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FriendBox;
