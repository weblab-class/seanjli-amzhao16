import "./DeletePopUp.css";
import React from "react";
import { useState, useEffect } from "react";

const DeletePopUp = (props) => {
  const [showDeleteBox, setShowDeleteBox] = useState(true);
  const toggleDelete = (event) => {
    console.log("hiding box");
    if (showDeleteBox === true) {
      setShowDeleteBox(false);
    } else {
      setShowDeleteBox(true);
    }
  };
  return (
    <div>
      {showDeleteBox ? (
        <div className="deletePopUpContainer">
          Are you sure you want to delete your dream?
          <button className="yesDelete" value="delete" onClick={props.deleteDream}>
            yes
          </button>
          <button className="noDelete" onClick={toggleDelete}>
            no
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default DeletePopUp;
