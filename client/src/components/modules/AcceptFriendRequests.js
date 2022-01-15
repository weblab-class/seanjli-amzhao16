import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const AcceptFriendRequests = (props) => {

    const acceptRequest = (id) => {
        post("/api/acceptFriendRequest", {sender_id: id});
        props.friends = [...props.friends, id];
        props.setRequests(props.requests.filter((x) => x.sender_id != id));
    }

    const declineRequest = (id) => {
        post("/api/declineFriendRequest", {sender_id: id});
        props.setRequests(props.requests.filter((x) => x.recipient_id != id));
    }

    return (
        <div>
            {props.requests.map((request) =>
            <div>
                <p>{request.sender_id}</p>
                <button onClick={() => acceptRequest(request.sender_id)}>Accept</button>
                <button onClick={() => declineRequest(request.sender_id)}>Decline</button>
            </div>
            )}
        </div>
    );
    
}

export default AcceptFriendRequests;