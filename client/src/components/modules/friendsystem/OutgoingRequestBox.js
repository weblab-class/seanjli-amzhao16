/* TODO prettify */

import React, { useState, useEffect } from "react";
import "./OutgoingRequestBox.css";

const OutgoingRequestBox = (props) => {
  return (
    <div className="outgoingRequestsBox">
      <a className="outgoingRequestName" href={"/profile/" + props.request.recipient_id}>
        {props.request.recipient_name}
      </a>
      <button className="cancelRequest" onClick={props.removeRequest}>
        cancel
      </button>
    </div>
  );
};

export default OutgoingRequestBox;
