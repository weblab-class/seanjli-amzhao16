import React, { useState, useEffect } from "react";

import FriendBox from "./FriendBox";

const FriendList = (props) => {

    const friendList = props.users.filter((x) => props.friends.includes(x._id));

    return (
        <div>
            {friendList.map((friend) => <FriendBox friend={friend} />)}
        </div>
    );
}

export default FriendList;