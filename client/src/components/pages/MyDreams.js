/* TODO get my dreams with modules */

import React, {useState, useEffect} from "react";
import {GetDream} from "../modules/dreams/GetDream";
import DreamContainer from "../modules/dreams/DreamContainer.js";

const MyDreams = (props) => {
    const dreams = GetDream();
    return (
        <div>
            {dreams.map(
                (dream) => <DreamContainer date={dream.timeStamp} name={dream.author.name} content={dream.content}/>
            )}
        </div>
    );
};

export default MyDreams;
