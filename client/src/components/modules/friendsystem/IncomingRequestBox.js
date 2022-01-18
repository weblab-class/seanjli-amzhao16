import React from "react";
import "./IncomingRequestBox.css";

const IncomingRequestBox = (props) => {
  return (
    <div className="incomingRequestsBox">
      <p>
        <a className="incomingRequestName" href={"/profile/" + props.request.sender_id}>
          {props.request.sender_name}
        </a>
      </p>
      <button
        className="acceptRequest"
        onClick={() => props.acceptRequest(props.request.sender_id)}
      >
        accept
      </button>
      <button
        className="declineRequest"
        onClick={() => props.declineRequest(props.request.sender_id)}
      >
        decline
      </button>
    </div>
  );
};

export default IncomingRequestBox;
