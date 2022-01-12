import React, { useState, useEffect } from "react";

const DreamContainer =  (props) => {
    /* TODO: make pretty */
    return (
        <div>
            <p>{props.date}</p>
            <strong>{props.name}</strong>: <p>{props.content}</p>
        </div>
    );
};

export default DreamContainer;