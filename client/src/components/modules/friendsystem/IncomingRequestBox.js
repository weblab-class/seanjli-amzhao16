/* TODO prettify */

import React from "react";

const IncomingRequestBox = (props) => {
    return (
        <div>
            <p>Request from {props.request.sender_name}</p>
            <button onClick={() => props.acceptRequest(props.request.sender_id)}>Accept</button>
            <button onClick={() => props.declineRequest(props.request.sender_id)}>Decline</button>
        </div>
    );
}

export default IncomingRequestBox;