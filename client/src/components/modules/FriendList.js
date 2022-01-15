import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const FriendList = (props) => {

    return (
        <div>
            {props.friends.map((x) => (JSON.stringify(x)))}
        </div>
    );
}

export default FriendList;