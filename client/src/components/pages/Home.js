import React, { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "./Home.css";
/* TODO: make the about and notifs eventually trigger a module to show up */
const Home = (props) => {
  return (
    <div>
      <a className="writeQuad" href="write"></a>
      <a className="writeQuadText" href="write">
        write dream
      </a>
      <a className="profileQuad" href="profile">
        {" "}
      </a>
      <a className="profileQuadText" href="profile">
        view profile
      </a>
      <a className="dreamsQuad" href="dreams"></a>
      <a className="dreamsQuadText" href="dreams">
        your dreams
      </a>
      <a className="feedQuad" href="feed"></a>
      <a className="feedQuadText" href="feed">
        friends' dreams
      </a>
      <div className="circle0"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
      <div className="circle6"></div>
      <div className="centerCircle">
        <p className="notif"></p>
        <p className="about"></p>
        <p className="hello"> Hello,</p>
        <p className="helloName">{props.username}</p>
        <div className="centerText"> dream log </div>
        <button className="logout" onClick={props.handleLogout}>
          log out
        </button>
      </div>
    </div>
  );
};

export default Home;
