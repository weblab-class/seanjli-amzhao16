/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";

const Profile = (props) => {
  return (
    <div>
      <NavBar type="p" handleLogout={props.handleLogout} />
      <br />
      <br />
    </div>
  );
};

export default Profile;
