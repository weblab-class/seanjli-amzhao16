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
  dateChunks = preg_split("[-]", date);
  dateNew = dateChunks[1] + "/" + dateChunks[2] + "/" + dateChunks[0];
  return dateNew;
}
export default DreamContainer;
