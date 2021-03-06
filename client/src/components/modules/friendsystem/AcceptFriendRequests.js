import React, { useState, useEffect } from "react";
import { get, post } from "../../../utilities.js";
import IncomingRequestBox from "./IncomingRequestBox";
import "./NoFriends.css";

const AcceptFriendRequests = (props) => {
  const acceptRequest = (id) => {
    post("/api/acceptFriendRequest", { sender_id: id });
    props.setFriends([...props.friends, id]);
    props.setRequests(props.requests.filter((x) => x.sender_id != id));
  };

  const declineRequest = (id) => {
    post("/api/declineFriendRequest", { sender_id: id });
    props.setRequests(props.requests.filter((x) => x.sender_id != id));
  };

  return (
    <div>
      {props.requests.length === 0 ? (
        <div className="noFriends"> you have no incoming requests</div>
      ) : (
        <div>
          {props.requests.map((request) => (
            <IncomingRequestBox
              request={request}
              acceptRequest={acceptRequest}
              declineRequest={declineRequest}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AcceptFriendRequests;
