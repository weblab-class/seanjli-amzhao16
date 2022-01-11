import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";
import DreamContainer from "../../modules/DreamContainer.js";

const GetDream = (props) => {

    const [dreams, setDreams] = useState([]);

    useEffect(() => {
        get("/api/dreams", {}).then((x) => setDreams(x));
    });
    

    return (
        <div>
            {dreams.map(
                (dream) => <DreamContainer date={dream.timeStamp} name={dream.author.name} content={dream.content}/>
            )}
        </div>
    )
}

export default GetDream;