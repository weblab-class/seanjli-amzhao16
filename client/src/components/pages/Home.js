import React, { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "./Home.css";
import NotifPage from "../modules/notifs";
import AboutPage from "../modules/about";

/* TODO: make the about and notifs eventually trigger a module to show up */
const Home = (props) => {
  const [showAbout, setShowAbout] = useState(false);
  const aboutPopUp = (event) => {
    console.log("clicky");
    if (showAbout === true) {
      setShowAbout(false);
    } else {
      setShowAbout(true);
    }
  };
  const [showNotif, setShowNotif] = useState(false);
  const notifPopUp = (event) => {
    console.log("clicky");
    if (showNotif === true) {
      setShowNotif(false);
    } else {
      setShowNotif(true);
    }
  };
  return (
    <div>
      <a className="writeQuad" href="/write">
        <a className="writeQuadText" href="/write">
          write dream
        </a>
      </a>
      <a className="profileQuad" href={"/profile/" + props.userId}>
        <a className="profileQuadText" href={"/profile/" + props.userId}>
          view profile
        </a>
      </a>

      <a className="dreamsQuad" href="/dreams">
        <a className="dreamsQuadText" href="/dreams">
          my dreams
        </a>
      </a>

      <a className="feedQuad" href="/feed">
        <a className="feedQuadText" href="/feed">
          friends' dreams
        </a>
      </a>

      <div className="circle0"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
      <div className="circle6"></div>
      <div className="centerCircle">
        <button className="notif" onClick={notifPopUp}></button>
        <button className="about" onClick={aboutPopUp}></button>
        <p className="hello"> Hello,</p>
        <p className="helloName">{props.username}</p>
        <div className="centerText"> dream log </div>
        <button className="logout" onClick={props.handleLogout}>
          log out
        </button>
      </div>
      {showAbout ? <AboutPage page="home" /> : <div></div>}
      {showNotif ? <NotifPage /> : <div></div>}
    </div>
  );
};

export default Home;
