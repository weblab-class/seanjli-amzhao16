/* TODO make WriteDream page with modules */

import React, { useState, useEffect } from "react";
import SubmitDreamButton from "../modules/dreams/SubmitDreamButton.js";
import SubmitDream from "../modules/dreams/SubmitDream.js";
import "./WriteDream.css";
import NavBar from "../modules/NavBar.js";

const WriteDream = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <NavBar type="w" handleLogout={props.handleLogout} />
      <br />
      <br />
      <br />
      {/* <SubmitDream /> */}
      <SubmitDreamButton />
    </>
  );
};

export default WriteDream;
