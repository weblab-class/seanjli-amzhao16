/* TODO prettify */

import React, { useState, useEffect } from "react";

const OutgoingRequestBox = (props) => {
    return (
        <div>
            <p>Sent request to <a href={"/profile/" + props.request.recipient_id}>{props.request.recipient_name}</a></p>
            <button onClick={props.removeRequest}>remove request</button>
        </div>
    );
}

export default OutgoingRequestBox;