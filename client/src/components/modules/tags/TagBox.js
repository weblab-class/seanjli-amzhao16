import React from "react";

const TagBox = (props) => {
    return (
        <div>
            <button onClick={props.removeTag}>{props.tag} x</button>
            <br/>
        </div>
    );
}

export default TagBox;