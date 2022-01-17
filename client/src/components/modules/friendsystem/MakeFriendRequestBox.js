import React from "react";
import "./MakeFriendRequestBox.css";

const MakeFriendRequestBox = (props) => {
  return (
    <div className="findFriendBox">
      <p className="findFriendName">{props.name}</p>
      <button className="addFriendButton" value={props.name} onClick={props.addRequest}>
        add
      </button>
    </div>
  );
};

export default MakeFriendRequestBox;
