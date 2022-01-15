import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const OutgoingFriendRequests = (props) => {

    return (
        <div>
            {props.outgoing.map((x) => (JSON.stringify(x)))}
        </div>
    );
}

export default OutgoingFriendRequests;