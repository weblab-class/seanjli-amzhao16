import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <a className="homeNav" href="/">
        {" "}
      </a>
      {props.type === "w" ? (
        <div className="writeNav">
          write
          <p className="writeUnderline"></p>
        </div>
      ) : (
        <a className="writeNav" href="/write">
          write
        </a>
      )}
      {props.type === "p" ? (
        <div className="profileNav">
          profile
          <p className="profileUnderline"></p>
        </div>
      ) : (
        <a className="profileNav" href="/profile">
          profile
        </a>
      )}
      {props.type === "f" ? (
        <div className="feedNav">
          friends
          <p className="feedUnderline"></p>
        </div>
      ) : (
        <a className="feedNav" href="/feed">
          friends
        </a>
      )}
      {props.type === "d" ? (
        <div className="dreamsNav">
          my dreams
          <p className="dreamsUnderline"></p>
        </div>
      ) : (
        <a className="dreamsNav" href="/dreams">
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
