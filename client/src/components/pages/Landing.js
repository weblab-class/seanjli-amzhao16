import React, { Component, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "../../utilities.css";
import "./Landing.css";
import AboutPage from "../modules/about";

const GOOGLE_CLIENT_ID = "799029787987-37thps95h1019p8mmpoi62cnv4amt0vg.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  const [showAbout, setShowAbout] = useState(false);
  const aboutPopUp = (event) => {
    if (showAbout === true) {
      setShowAbout(false);
    } else {
      setShowAbout(true);
    }
  };
  return (
    <div className="landingPage">
      <h1 className="title"> dream log</h1>
      <h4 className="subtext">write your dreams into reality. </h4>
      <br />
      {userId ? (
        <GoogleLogout
          className="login"
          clientId={GOOGLE_CLIENT_ID}
          buttonText="logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          className="login"
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}
      <button className="aboutLanding" onClick={aboutPopUp}>
        about
      </button>
      <br />
      {showAbout ? <AboutPage page="landing" /> : <div></div>}
    </div>
  );
};

export default Skeleton;
