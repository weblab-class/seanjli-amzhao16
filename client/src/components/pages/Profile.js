/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

import FriendList from "../modules/friendsystem/FriendList";
import MakeFriendRequests from "../modules/friendsystem/MakeFriendRequests";
import AcceptFriendRequests from "../modules/friendsystem/AcceptFriendRequests";
import OutgoingFriendRequests from "../modules/friendsystem/OutgoingFriendRequests";


const Profile = (props) => {

    const [users, setUsers] = useState([]);
    const [me, setMe] = useState([{friends : [], id : ""}]);
    const [requests, setRequests] = useState([]);
    const [outgoing, setOutgoing] = useState([]);
    const [friends, setFriends] = useState([]);
    const [requestees, setRequestees] = useState([]);

    useEffect(() => {
        get("/api/getUser").then((x) => setUsers(x));
        get("/api/getMe").then((x) => setMe(x));
        get("/api/getFriendRequest").then((x) => setRequests(x));
        get("/api/getOutgoingFriendRequest").then((x) => setOutgoing(x));
    }, []);

    useEffect(() => {
        setFriends(me[0].friends);
    }, [me])

    useEffect(() =>{
        setRequestees(users.filter((x) =>
        !(
            friends.includes(x._id) ||
            requests.map((x) => x.sender_id).includes(x._id) ||
            outgoing.map((x) => x.recipient_id).includes(x._id)
        )
        ));
    }, [users, friends, requests, outgoing])

  return (
    <div>
      <NavBar type="p" handleLogout={props.handleLogout} />
      <br />
      <br />
      <h1>Friends</h1>
      <FriendList users={users} friends={friends} setFriends={setFriends}/>
      <h1>Make Requests</h1>
      <MakeFriendRequests requestees={requestees} setRequestees={setRequestees} outgoing={outgoing} setOutgoing={setOutgoing}/>
      <br />
      <h1>Incoming Requests</h1>
      <AcceptFriendRequests requests={requests} setRequests={setRequests} friends={friends} setFriends={setFriends}/>
      <h1>Outgoing Requests</h1> 
      <OutgoingFriendRequests outgoing={outgoing} setOutgoing={setOutgoing} />
    </div>
  );
};

export default Profile;
