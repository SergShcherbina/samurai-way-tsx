import React, {FC} from "react";
import { MapStateToPropsFriendsType} from "./FriendsContainer";
import {Friend} from "./friend/Friend";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons";
import {FormSearchType, SearchFriendForm} from "./friend/SearchFriendForm";

type PropsType = {
    searchUsers: (value: string) => void
} & MapStateToPropsFriendsType;

export const Friends: FC<PropsType>= (props ) => {
    const friends = props.friends.map(friend => {
        if (friend.followed) {
            return (
                <Friend key={friend.id} friend={friend}/>
            )
        }
    });

    const onSubmit = (value: FormSearchType) => {
        props.searchUsers(value.searchValue)
    }

    return (
        <FriendsRoot>
            <span><FontAwesomeIcon icon={faUserFriends} size={'1x'}/>Friends {props.friendsCount} </span>
            <SearchFriendForm onSubmit={onSubmit} />
            {friends}
        </FriendsRoot>
    );
};

const FriendsRoot = styled.div`
  background-color: var(--color-bloks);
  padding: var(--padding-blocks);
  border-radius: 10px;
  box-shadow: var(--box-shadow-blocks);
  max-height: 550px;
  overflow: auto;

  position: sticky;
  top: 5px;

  & > span {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: bold;
    color: var(--main-color)
  }
`