/* TODO prettify */

import React from "react";

const IncomingRequestBox = (props) => {
    return (
        <div>
            <p>Request from 
                <a href={"/profile/" + props.request.sender_id}>{props.request.sender_name}</a>
            </p>
            <button onClick={() => props.acceptRequest(props.request.sender_id)}>Accept</button>
            <button onClick={() => props.declineRequest(props.request.sender_id)}>Decline</button>
        </div>
    );
}

export default IncomingRequestBox;