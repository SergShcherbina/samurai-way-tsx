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
    });

    return (
        <FriendsStyle>
            <span>Friends</span>
            {friends}
        </FriendsStyle>
    );
};

const FriendsStyle = styled.div`
  background-color: var(--color-bloks);
  padding: var(--padding-blocks);
  border-radius: 10px;
  box-shadow: var(--box-shadow-blocks);
  height: fit-content;

  position: sticky;
  top: 5px;

  & > span {
    font-size: 1.3rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 30%;
      background: var(--main-color)
    }
  }
`