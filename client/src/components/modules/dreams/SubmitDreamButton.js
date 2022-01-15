import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";
import "./SubmitDream.css";

const SubmitDreamButton = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const addDream = (value) => {
      const body = { content: value };
      post("/api/addDream", body);
    };
    addDream(value);
    setValue("");
    console.log("Added dream with content " + value);
  };

  /* TODO: add css reference in div statement */

  return (
    <div>
      {/* <textarea
        className="textBox"
        placeholder="Write your dream here!"
        type="text"
        value={value}
        onChange={handleChange}
      /> */}
      <br />
      <button className="submitButton" type="submit" value="Submit" onClick={handleSubmit}>
        submit dream
      </button>
    </div>
  );
};

export default SubmitDreamButton;
