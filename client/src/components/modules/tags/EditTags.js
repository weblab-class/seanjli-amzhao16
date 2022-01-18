import React from "react";
import TagBox from "./TagBox.js";
import UsedTagBox from "./UsedTagBox.js";

const EditTags = (props) => {
    return (
        <div>
            {props.tags.map((tag) =>
            <TagBox tag={tag} removeTag={() => props.removeTag(tag)} />
            /*
            <div>
            <p>{tag}</p>
            <button onClick={() => props.removeTag(tag)}>remove</button>
            <br/>
            </div>*/
            )}
            <input type="text" value={props.tagInput} onChange={props.handleChange} />
            <br />
            <button onClick={props.addNewTag}>add tag</button>
            <br/>
            {props.usedTags.map((tag) => 
            <UsedTagBox tag={tag} addUsedTag={() => props.addUsedTag(tag)} />
            /*
            <div>
            <button onClick={() => props.addUsedTag(x)}>{x} +</button>
            <br/>
            </div>
            */
            )}
        </div>
    );
}

export default EditTags;