import React, { useState, useEffect } from "react";
import OutgoingRequestBox from "./OutgoingRequestBox";

const OutgoingFriendRequests = (props) => {

    return (
        <div>
            {props.outgoing.map((request) =>
            <OutgoingRequestBox request={request} />
            )}
        </div>
    );
}

export default OutgoingFriendRequests;