/* TODO prettify */

import React, { useState, useEffect } from "react";

const OutgoingRequestBox = (props) => {
    return (
        <div>
            <p>Sent request to {props.request.recipient_name}</p>
        </div>
    );
}

export default OutgoingRequestBox;