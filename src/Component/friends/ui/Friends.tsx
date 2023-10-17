import React from "react";
import {MapStateToPropsFriendsType} from "./FriendsContainer";
import {Friend} from "./friend/Friend";
import styled from "styled-components";

export const Friends = (props: MapStateToPropsFriendsType) => {

    const friends = props.friends.map(friend => {
        if (friend.followed) {
            return (
                <Friend key={friend.id} friend={friend}/>
            )
        }
    })

    return (
        <FriendsStyle>
            <h4>Friends</h4>
            {friends}
        </FriendsStyle>
    );
};

const FriendsStyle = styled.div`
  background-color: var(--color-bloks);
  padding: var(--padding-blocks);
  border-radius: 5px;
  box-shadow: var(--box-shadow-blocks);
`