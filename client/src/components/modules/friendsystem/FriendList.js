import React, { useState, useEffect } from "react";

import FriendBox from "./FriendBox";
import { get, post } from "../../../utilities.js";

const FriendList = (props) => {

    const friendList = props.users.filter((x) => props.friends.includes(x._id));

    const removeFriend = (id) => {
        post("/api/removeFriend", {recipient_id: id});
        props.setFriends(props.friends.filter( (x) => x != id ));
        props.setRequestees([...props.requestees, ...props.users.filter((x) => x._id == id)]);
    }

    return (
        <div>
            {friendList.map((friend) => <FriendBox friend={friend} removeFriend={removeFriend}/>)}
        </div>
    );
}

export default FriendList;