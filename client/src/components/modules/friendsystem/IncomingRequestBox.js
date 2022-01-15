/* TODO prettify */

import React from "react";

const IncomingRequestBox = (props) => {
    return (
        <div>
            <p>Request from {request.sender_name}</p>
            <button onClick={() => props.acceptRequest(request.sender_id)}>Accept</button>
            <button onClick={() => props.declineRequest(request.sender_id)}>Decline</button>
        </div>
    );
}

export default IncomingRequestBox;