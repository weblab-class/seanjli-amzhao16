/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";
import { useParams } from '@reach/router';

import { get, post } from "../../utilities.js";

import FriendList from "../modules/friendsystem/FriendList";
import MakeFriendRequests from "../modules/friendsystem/MakeFriendRequests";
import AcceptFriendRequests from "../modules/friendsystem/AcceptFriendRequests";
import OutgoingFriendRequests from "../modules/friendsystem/OutgoingFriendRequests";

import NotFound from "./NotFound";

const Profile = (props) => {

    const { text } = useParams();
    
    if (text.length != 24) {
        return <NotFound />;
    }

    const [profile, setProfile] = useState([{name: []}]);

    const [users, setUsers] = useState([]);
    const [me, setMe] = useState([{friends : [], id : ""}]);
    const [requests, setRequests] = useState([]);
    const [outgoing, setOutgoing] = useState([]);
    const [friends, setFriends] = useState([]);
    const [requestees, setRequestees] = useState([]);

    useEffect(() => {
        get("/api/getProfile", {parent : text}).then((x) => setProfile(x));
    }, []);

    /*
    BELOW IS FRIENDS STUFF!
    */
    if (text === props.userId) {
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
            outgoing.map((x) => x.recipient_id).includes(x._id) ||
            x._id === props.userId
        )
        ));
    }, [users, friends, requests, outgoing])
    }

  return (
    <div>
      <NavBar type="p" handleLogout={props.handleLogout} userId={props.userId}/>
      <br />
      <br />
      <h1>Profile</h1>
      <h4>Name: </h4><p>{profile[0].name}</p>
      <br />
      <br />
      { text === props.userId ? 
      <div>
      <h1>Friends</h1>
      <FriendList users={users} requestees={requestees} setRequestees={setRequestees} friends={friends} setFriends={setFriends}/>
      <h1>Make Requests</h1>
      <MakeFriendRequests requestees={requestees} setRequestees={setRequestees} outgoing={outgoing} setOutgoing={setOutgoing}/>
      <br />
      <h1>Incoming Requests</h1>
      <AcceptFriendRequests requests={requests} setRequests={setRequests} friends={friends} setFriends={setFriends}/>
      <h1>Outgoing Requests</h1> 
      <OutgoingFriendRequests outgoing={outgoing} setOutgoing={setOutgoing} />
    </div> :
      <br></br>}
    </div>
  );
};

export default Profile;
