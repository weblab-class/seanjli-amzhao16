import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";

const SubmitDream = (props) => {
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
    console.log("Added dream with content " + value);
  };

  /* TODO: add css reference in div statement */

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit" value="Submit" onClick={handleSubmit}>
        submit dream
      </button>
    </div>
  );
};

export default SubmitDream;
