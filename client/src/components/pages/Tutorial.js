import React, { useState, useEffect } from "react";
import "./Tutorial.css";

const Tutorial = (props) => {
  const [page, setPage] = useState(0);

  const pages = [
    <div>hi</div>,
    <div>hi but better</div>,
    <div>rawr hi angela</div>,
    <div>bonk</div>,
    <div>more bonk</div>,
    <div>im bored</div>,
    <div>help</div>,
    <div>fin</div>,
  ];

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <a className="exitTutorial" href="/">
        exit
      </a>
      <div className="tutorialContainer">
        {pages[page]}
        {page > 0 ? (
          <button className="previousPage" onClick={prevPage}>
            prev
          </button>
        ) : (
          <></>
        )}
        {page < pages.length - 1 ? (
          <button className="nextPage" onClick={nextPage}>
            next
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
