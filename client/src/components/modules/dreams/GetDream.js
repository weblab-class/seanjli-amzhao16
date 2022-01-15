import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";

export const GetDream = () => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    get("/api/dreams").then((x) => setDreams(x.reverse()));
  });

  return dreams;
};
