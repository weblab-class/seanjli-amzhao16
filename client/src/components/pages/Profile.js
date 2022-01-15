/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

import FriendList from "../modules/FriendList";
import MakeFriendRequests from "../modules/MakeFriendRequests";
import AcceptFriendRequests from "../modules/AcceptFriendRequests";
import OutgoingFriendRequests from "../modules/OutgoingFriendRequests";


const Profile = (props) => {

    const [users, setUsers] = useState([]);
    const [me, setMe] = useState([{friends : [], id : ""}]);
    const [requests, setRequests] = useState([]);
    const [outgoing, setOutgoing] = useState([]);
    const friends = users.filter((x) => (me[0].friends.includes(x._id)));

    useEffect(() => {
        get("/api/getUser").then((x) => setUsers(x));
        get("/api/getMe").then((x) => setMe(x));
        get("/api/getFriendRequest").then((x) => setRequests(x));
        get("/api/getOutgoingFriendRequest").then((x) => setOutgoing(x));
    }, []);


  return (
    <div>
      <NavBar type="p" handleLogout={props.handleLogout} />
      <br />
      <br />
      <h1>Friends</h1>
      <FriendList users={users} setUsers={setUsers} me={me} setMe={setMe} requests={requests} setRequests={setRequests} outgoing={outgoing} setOutgoing={setOutgoing} friends={friends}/>
      <h1>Make Requests</h1>
      <MakeFriendRequests users={users} setUsers={setUsers} me={me} setMe={setMe} requests={requests} setRequests={setRequests} outgoing={outgoing} setOutgoing={setOutgoing} friends={friends}/>
      <br />
      <h1>Incoming Requests</h1>
      <AcceptFriendRequests users={users} setUsers={setUsers} me={me} setMe={setMe} requests={requests} setRequests={setRequests} outgoing={outgoing} setOutgoing={setOutgoing} friends={friends}/>
      <h1>Outgoing Requests</h1> 
      <OutgoingFriendRequests users={users} setUsers={setUsers} me={me} setMe={setMe} requests={requests} setRequests={setRequests} outgoing={outgoing} setOutgoing={setOutgoing} friends={friends}/>
    </div>
  );
};

export default Profile;
