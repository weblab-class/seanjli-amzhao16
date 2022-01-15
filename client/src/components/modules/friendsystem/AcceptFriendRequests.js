import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";
import IncomingRequestBox from "./IncomingRequestBox";

const AcceptFriendRequests = (props) => {

    const acceptRequest = (id) => {
        post("/api/acceptFriendRequest", {sender_id: id});
        props.setFriends([...props.friends, id]);
        props.setRequests(props.requests.filter((x) => x.sender_id != id));
    }

    const declineRequest = (id) => {
        post("/api/declineFriendRequest", {sender_id: id});
        props.setRequests(props.requests.filter((x) => x.recipient_id != id));
    }

    return (
        <div>
                {props.requests.map((request) =>
                    <IncomingRequestBox request={props.request} acceptRequest={props.acceptRequest} declineRequest={props.declineRequest} />
                )}
        </div>
    );
    
}

export default AcceptFriendRequests;