import React from "react";

const UsedTagBox = (props) => {
    return (
        <div>
            <button onClick={props.addUsedTag}>{props.tag} +</button>
            <br/>
        </div>
    );
}

export default UsedTagBox;