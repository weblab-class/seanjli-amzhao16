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
  const [me, setMe] = useState([{ friends: ["none"], id: "" }]);

  const [friends, setFriends] = useState(["none"]);

  useEffect(() => {
    get("/api/getMe").then((x) => setMe(x));
  }, []);

  useEffect(() => {
    setFriends(me[0].friends);
  }, [me]);

  useEffect(() => {
    if (friends.length !== 1 || friends[0] !== "none") {
      get("/api/dreams", { parent: [...friends, props.userId] }).then((x) =>
        setDreams(x.reverse())
      );
    }
  }, [friends]);

  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [requestees, setRequestees] = useState([]);

  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const [search1, setSearch1] = useState("");

  const handleChange1 = (event) => {
    const value = event.target.value;
    setSearch1(value);
  };
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
    if (showAllFriends === true) {
      setShowAllFriends(false);
      document.getElementById("findFriendsLabel").blur();
      setSearch("");
    } else {
      setShowAllFriends(true);
    }
  };

  return (
    <div className="friendsBackground">
      <NavBar type="f" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="friendsSectionContainer">
        <div>
          <div className="magnifyingGlass"></div>
          <input
            autocomplete="off"
            placeholder="add new friends"
            className="findFriendsLabel"
            id="findFriendsLabel"
            onClick={friendsPopUp}
            type="text"
            onChange={handleChange}
            value={search}
          />
          {showAllFriends ? (
            <div className="makeFriendsBox">
              {search === "" ? (
                <div className="emptySearchFriends"> type your friend's name above</div>
              ) : (
                <MakeFriendRequests
                  requestees={requestees
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .filter((x) => x.name.toLowerCase().startsWith(search.toLowerCase()))}
                  setRequestees={setRequestees}
                  outgoing={outgoing}
                  setOutgoing={setOutgoing}
                />
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* <div>
          <div className="myFriendsLabel">my friends</div>
          <div className="myFriendsArea">
            <FriendList
              users={users.sort((a, b) => a.name.localeCompare(b.name))}
              requestees={requestees}
              setRequestees={setRequestees}
              friends={friends}
              setFriends={setFriends}
            />
          </div>
        </div> */}
        <div>
          <div className="magnifyingGlass1"></div>
          <input
            autocomplete="off"
            placeholder="my friends"
            className="myFriendsLabel"
            type="text"
            onChange={handleChange1}
            value={search1}
          />
          <div className="myFriendsArea">
            <FriendList
              users={users
                .sort((a, b) => a.name.localeCompare(b.name))
                .filter((x) => x.name.toLowerCase().startsWith(search1.toLowerCase()))}
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
              requests={requests.sort((a, b) => a.sender_name.localeCompare(b.sender_name))}
              setRequests={setRequests}
              friends={friends}
              setFriends={setFriends}
            />
          </div>
          <div className="incomingRequestsLabel">incoming requests</div>
        </div>
        <div>
          <div className="outgoingRequestsArea">
            <OutgoingFriendRequests
              outgoing={outgoing.sort((a, b) => a.recipient_name.localeCompare(b.recipient_name))}
              setOutgoing={setOutgoing}
            />
          </div>
          <div className="outgoingRequestsLabel">outgoing requests</div>
        </div>
      </div>
      <div className="friendsContainerBorder">
        {dreams.length === 0 ? (
          <div className="noDreamsFeed">
            there are no dreams here. write a public one and add friends!
          </div>
        ) : (
          <div className="friendsDreamsContainer">
            {dreams.map((dream) => (
              <DreamContainer
                date={dream.timeStamp}
                name={dream.author.name}
                content={dream.content}
                tags={dream.tags}
                private={dream.private}
                author_id={dream.author._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
