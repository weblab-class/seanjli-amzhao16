/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";
import { useParams } from "@reach/router";

import { get, post } from "../../utilities.js";

import NotFound from "./NotFound";

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
    <div>
      <NavBar type="p" handleLogout={props.handleLogout} userId={props.userId} />
      <br />
      <br />
      <h1>Profile</h1>
      <h4>Name: </h4>
      <p>{profile[0].name}</p>
    </div>
  );
};

export default Profile;
