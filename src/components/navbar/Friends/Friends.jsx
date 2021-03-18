import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let FriendsElement = props.friends.map(f => <Friend id={f.id} name={f.name}/>)
    return (
        <div>
            {FriendsElement}
        </div>
    )
}

export default Friends;
