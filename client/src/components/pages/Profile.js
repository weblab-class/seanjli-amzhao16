/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";
import { useParams } from "@reach/router";

import { get, post } from "../../utilities.js";

import NotFound from "./NotFound";
import "./Profile.css";

const Profile = (props) => {
  const { text } = useParams();

  if (text.length != 24) {
    return <NotFound />;
  }

  const [profile, setProfile] = useState([{ name: [] }]);

  useEffect(() => {
    get("/api/getProfile", { parent: text }).then((x) => setProfile(x));
  }, []);

  return (
    <div className="profileBackground">
      <NavBar type="p" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="profileContainer">
        {" "}
        <h1 className="profileTitle">Profile</h1>
        <p className="profileName">Name: {profile[0].name}</p>
        <div className="defaultAvatar"> </div>
      </div>
    </div>
  );
};

export default Profile;
