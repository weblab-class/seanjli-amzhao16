import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";

export const GetDream = (require) => {

    const [dreams, setDreams] = useState([]);

    useEffect(() => {
        get("/api/dreams", require).then((x) => setDreams(x));
    });
    
    return dreams;
}