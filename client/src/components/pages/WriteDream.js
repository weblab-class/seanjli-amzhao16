/* TODO make WriteDream page with modules */

import React, { useState, useEffect } from "react";
import SubmitDream from "../modules/dreams/SubmitDream.js";
import "./WriteDream.css";
import NavBar from "../modules/NavBar.js";

const WriteDream = (props) => {
  return (
    <>
      <NavBar type="w" handleLogout={props.handleLogout} />
      <br />
      <br />
      <br />
      <SubmitDream />
    </>
  );
};

export default WriteDream;
