import React, { useState, useEffect } from "react";

import { get, post } from "../../../utilities.js";

const MakeFriendRequests = (props) => {

/*     const [users, setUsers] = useState([]);
    const [me, setMe] = useState([{friends : [], id : ""}]);

    useEffect(() => {
        get("/api/getUser").then((x) => setUsers(x));
        get("/api/getMe").then((x) => setMe(x));
    }, []);
*/

    const addRequest = async (id, name) => {
        const req = await post("/api/addFriendRequest", {recipient_id : id, recipient_name : name});
        props.setOutgoing([...props.outgoing, req]);
        props.setRequestees(props.requestees.filter((x) => x._id != id));
    }; 

    return (
        <div>
            {props.requestees.map((user) =>
            <div>
                <p>{user.name}</p>
                <button value={user.name} onClick={() => addRequest(user._id, user.name)}>Make Friend Request</button>
            </div>
            )}
        </div>
    );
    
}

export default MakeFriendRequests;