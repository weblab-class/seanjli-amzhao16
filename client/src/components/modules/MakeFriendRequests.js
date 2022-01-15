import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";

import { get, post } from "../../utilities.js";

const MakeFriendRequests = (props) => {

/*     const [users, setUsers] = useState([]);
    const [me, setMe] = useState([{friends : [], id : ""}]);

    useEffect(() => {
        get("/api/getUser").then((x) => setUsers(x));
        get("/api/getMe").then((x) => setMe(x));
    }, []);
*/

    const addRequest = async (id) => {
        const req = await post("/api/addFriendRequest", {recipient_id : id});
        props.setOutgoing([...props.outgoing, req]);
    }; 

    return (
        <div>
            {props.users.map((user) =>
            <div>
                <p>{user.name}</p>
                <button value={user.name} onClick={() => addRequest(user._id)}>Make Friend Request</button>
            </div>
            )}
        </div>
    );
    
}

export default MakeFriendRequests;