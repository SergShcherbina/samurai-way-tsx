import React from "react";
import s from './friends.module.css'
import {MapStateToPropsFriendsType} from "./FriendsContainer";
import {Friend} from "./friend/Friend";

export const Friends = (props: MapStateToPropsFriendsType) => {

    const friends = props.friends.map(friend => {
        if (friend.followed) {
            return (
                <Friend friend={friend}/>
            )
        }
    })

    return (
        <div>
            <div className={s.friends}>Friends</div>
            <div>
                {friends}
            </div>
        </div>
    );
};
