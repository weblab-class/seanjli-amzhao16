import React, { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "./Home.css";
const Home = (props) => {
  return (
    <div>
      <p className="hello"> Hello, {props.username}</p>
      <button className="logout" onClick={props.handleLogout}>
        Logout
      </button>
      <br />
      <a className="writeQuad" href="submit">
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
    </div>
  );
};

export default Home;
