import React, { useState, useEffect } from "react";
import DreamContainer from "../modules/dreams/DreamContainer.js";
import NavBar from "../modules/NavBar.js";
import "./Feed.css";
import { get, post } from "../../utilities.js";
import { useParams } from "@reach/router";

import FriendList from "../modules/friendsystem/FriendList";
import MakeFriendRequests from "../modules/friendsystem/MakeFriendRequests";
import AcceptFriendRequests from "../modules/friendsystem/AcceptFriendRequests";
import OutgoingFriendRequests from "../modules/friendsystem/OutgoingFriendRequests";

const Feed = (props) => {
  const [dreams, setDreams] = useState([]);
  const [me, setMe] = useState([{ friends: [], id: "" }]);

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    get("/api/getMe").then((x) => setMe(x));
  }, []);

  useEffect(() => {
    setFriends(me[0].friends);
  }, [me]);

  useEffect(() => {
    get("/api/dreams", { parent: [...friends, props.userId] }).then((x) => setDreams(x.reverse()));
  }, [friends]);

  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [requestees, setRequestees] = useState([]);

  useEffect(() => {
    get("/api/getUser").then((x) => setUsers(x));
    get("/api/getMe").then((x) => setMe(x));
    get("/api/getFriendRequest").then((x) => setRequests(x));
    get("/api/getOutgoingFriendRequest").then((x) => setOutgoing(x));
  }, []);

  useEffect(() => {
    setFriends(me[0].friends);
  }, [me]);

  useEffect(() => {
    setRequestees(
      users.filter(
        (x) =>
          !(
            friends.includes(x._id) ||
            requests.map((x) => x.sender_id).includes(x._id) ||
            outgoing.map((x) => x.recipient_id).includes(x._id) ||
            x._id === props.userId
          )
      )
    );
  }, [users, friends, requests, outgoing]);

  const [showAllFriends, setShowAllFriends] = useState(false);
  const friendsPopUp = (event) => {
    console.log("clicky");
    if (showAllFriends === true) {
      setShowAllFriends(false);
    } else {
      setShowAllFriends(true);
    }
  };

  return (
    <div>
      <NavBar type="f" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="friendsSectionContainer">
        <div>
          <button className="findFriendsLabel" onClick={friendsPopUp}>
            find friends
          </button>
          {showAllFriends ? (
            <div className="makeFriendsBox">
              {" "}
              <MakeFriendRequests
                requestees={requestees}
                setRequestees={setRequestees}
                outgoing={outgoing}
                setOutgoing={setOutgoing}
              />{" "}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div className="myFriendsLabel">my friends</div>
          <div className="myFriendsArea">
            <FriendList
              users={users}
              requestees={requestees}
              setRequestees={setRequestees}
              friends={friends}
              setFriends={setFriends}
            />
          </div>
        </div>
        <div>
          <div className="incomingRequestsArea">
            <AcceptFriendRequests
              requests={requests}
              setRequests={setRequests}
              friends={friends}
              setFriends={setFriends}
            />
          </div>
          <div className="incomingRequestsLabel">incoming requests</div>
        </div>
        <div>
          <div className="outgoingRequestsArea">
            <OutgoingFriendRequests outgoing={outgoing} setOutgoing={setOutgoing} />
          </div>
          <div className="outgoingRequestsLabel">outgoing requests</div>
        </div>
      </div>
      <div className="friendsContainerBorder">
        <div className="friendsDreamsContainer">
          {dreams.map((dream) => (
            <DreamContainer
              date={dream.timeStamp}
              name={dream.author.name}
              content={dream.content}
              tags={dream.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
