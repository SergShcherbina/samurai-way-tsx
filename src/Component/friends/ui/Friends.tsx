import React from "react";
import {MapStateToPropsFriendsType} from "./FriendsContainer";
import {Friend} from "./friend/Friend";
import styled from "styled-components";
import {Input} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons";

export const Friends = (props: MapStateToPropsFriendsType) => {

    const friends = props.friends.map(friend => {
        if (friend.followed) {
            return (
                <Friend key={friend.id} friend={friend}/>
            )
        }
    });

    return (
        <FriendsRoot>
            <span><FontAwesomeIcon icon={faUserFriends} size={'xs'}/>Friends</span>
            <Input type={"search"}/>
            {friends}
        </FriendsRoot>
    );
};

const FriendsRoot = styled.div`
  background-color: var(--color-bloks);
  padding: var(--padding-blocks);
  border-radius: 10px;
  box-shadow: var(--box-shadow-blocks);
  height: 500px;
  overflow: auto;

  position: sticky;
  top: 5px;

  & > span {
    font-size: 1.2rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--main-color)
    }
  }
`