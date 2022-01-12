/* TODO make feed page */

import React, {useState, useEffect} from "react";
import {GetDream} from "../modules/dreams/GetDream";
import DreamContainer from "../modules/dreams/DreamContainer.js";

const Feed = (props) => {
    const dreams = GetDream({});
    return (
        <div>
            {dreams.map(
                (dream) => <DreamContainer date={dream.timeStamp} name={dream.author.name} content={dream.content}/>
            )}
        </div>
    );
};

export default Feed;
