import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Landing.css";

/*TODO: fix favicon icon :( */

const GOOGLE_CLIENT_ID = "476707967946-j4nra2r90k17lnv4vf4shko7li3osica.apps.googleusercontent.com";
/* TODO: add an about page/icon (next to login?)*/

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
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
    </div>
  );
};

export default Skeleton;
