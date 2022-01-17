import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";
import OutgoingRequestBox from "./OutgoingRequestBox";

const OutgoingFriendRequests = (props) => {

    const removeRequest = (id) => {
        post("/api/removeFriendRequest", {recipient_id: id});
        props.setOutgoing(props.outgoing.filter((x) => x.recipient_id != id));
    }

    return (
        <div>
            {props.outgoing.map((request) =>
            <OutgoingRequestBox request={request} removeRequest={() => removeRequest(request.recipient_id)} />
            )}
        </div>
    );
}

export default OutgoingFriendRequests;