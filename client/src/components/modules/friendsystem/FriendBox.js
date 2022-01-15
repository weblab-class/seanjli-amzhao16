/* TODO prettify */

import React, { useState, useEffect } from "react";

const FriendBox = (props) => {

    return (
        <div>
            {props.friend.name}
            <button 
            value={props.friend._id} 
            onClick={() => props.removeFriend(props.friend._id)}
            >x</button>
        </div>
    );
}

export default FriendBox;