import React, { useState, useEffect } from "react";
import "./DreamContainer.css";

const DreamContainer = (props) => {
  /* TODO: confused on how to get individual bubbles?*/
  return (
    <div className="container">
      <p className="date">{props.date}</p>
      <strong className="name">{props.name}</strong> <p className="content">{props.content}</p>
    </div>
  );
};

/* TODO: function to get date in mm/dd/yyyy format?? how to apply*/
function convertDate(date) {
  date = preg_split("[-], date");
  date = date[1] + "/" + date[2] + "/" + date[0];
}
export default DreamContainer;
