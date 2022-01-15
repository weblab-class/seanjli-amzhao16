import React, { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "./Home.css";
const Home = (props) => {
  return (
    <div>
      <br />
      <a className="writeQuad" href="write">
        write dream
      </a>
      <a className="profileQuad" href="profile">
        view profile
      </a>
      <br />
      <a className="dreamsQuad" href="dreams">
        your dreams
      </a>
      <a className="feedQuad" href="feed">
        friends' dreams
      </a>
      <div className="centerCircle">
        <p className="hello"> Hello, {props.username}</p>
        <div className="centerText"> dream log </div>
        <button className="logout" onClick={props.handleLogout}>
          log out
        </button>
      </div>
    </div>
  );
};

export default Home;
