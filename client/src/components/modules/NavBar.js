import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <a className="homeNav" href="/">
        {" "}
      </a>
      {props.type === "w" ? (
        <p className="writeNav">
          write
          <p className="writeUnderline"></p>
        </p>
      ) : (
        <a className="writeNav" href="write">
          write
        </a>
      )}
      {props.type === "p" ? (
        <p className="profileNav">
          profile
          <p className="profileUnderline"></p>
        </p>
      ) : (
        <a className="profileNav" href="profile">
          profile
        </a>
      )}
      {props.type === "f" ? (
        <p className="feedNav">
          friends
          <p className="feedUnderline"></p>
        </p>
      ) : (
        <a className="feedNav" href="feed">
          friends
        </a>
      )}
      {props.type === "d" ? (
        <p className="dreamsNav">
          my dreams
          <p className="dreamsUnderline"></p>
        </p>
      ) : (
        <a className="dreamsNav" href="dreams">
          my dreams
        </a>
      )}
      <button className="logoutNav" onClick={props.handleLogout}>
        log out
      </button>
    </div>
  );
};

export default NavBar;
