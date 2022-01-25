import React, { useState, useEffect } from "react";
import "./Tutorial.css";

const Tutorial = (props) => {
  const [page, setPage] = useState(0);

  const pages = [
    <div>
      <p className="tutorialIntro">
        Welcome to dream log! Before you get started, we'd like to help get you familiar with the
        site.
      </p>
    </div>,
    <div>
      <div className="tutorialTitle">write dream:</div>
      <p className="tutorialContent">
        write about your dream in as much or as little detail as you choose. <br /> <br />
        When you’re done, make sure to click the public/private switch if you don’t want to share
        the dream with friends <br />
        <br />
        to add a new tag, type in a custom tag in the bottom left <br />
        <br />
        to add a tag you already created, look to the set of tags on the bottom right
      </p>
      <div className="gifContainer">
        <div className="gifWrite"></div>
      </div>
    </div>,
    <div>
      <div className="tutorialTitle">profile:</div>
      <p className="tutorialContent">
        click on the avatar to edit your profile (note that accessories will be locked until you win
        its corresponding achievement) <br /> <br /> hover over an achievement to find out how to
        win it.
      </p>
      <div className="gifContainer">
        <div className="gifProfile"></div>
      </div>
    </div>,
    <div>
      <div className="tutorialTitle">friends' dreams</div>
      <p className="tutorialContent">
        type a friend’s name into “add new friends” to send a friend request <br /> <br /> manage
        incoming/outgoing requests through their corresponding sections (note that you may need to
        refresh the page to see a new incoming request) <br /> <br /> when you’re friends, you will
        be able to see their dreams and avatar!
      </p>
      <div className="gifContainer">
        <div className="gifFeed"></div>
      </div>
    </div>,
    <div>
      <div className="tutorialTitle">your dreams:</div>
      <p className="tutorialContent">
        click on a tag to filter the dreams by that tag (you can filter by multiple tags at once)
        <br /> <br />
        you can also search by a specific word or phrase with the upper right search bar
        <br /> <br />
        if you want to delete a dream or switch it from public to private/vice versa, click on the
        three dots by the timestamp
      </p>
      <div className="gifContainer">
        <div className="gifDreams"></div>
      </div>
    </div>,
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
