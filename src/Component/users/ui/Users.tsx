import React from "react";
import Stub from "../../../assets/img/avatarUser.png";
import {UserType} from "../model/users-reducer";
import {Spinner} from "../../../assets/spinner/Spinner";
import {NavLink} from "react-router-dom";
import {Pagination} from "./pagination/Pagination";
import styled, {keyframes} from "styled-components";

type UsersType = {
    users: UserType[];
    pageSize: number;
    totalItemsCout: number;
    currentPage: number;
    isFetching: boolean;
    disableBtnFollow: number[];
    changeCurrentPage: (pageNumber: number) => void;
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
};

export const Users = (props: UsersType) => {
    if (props.isFetching) return <Spinner/>

    const onFollow = (userId: number, follow: boolean) => {
        follow ? props.follow(userId) : props.unFollow(userId)
    }

    const disableBtn = (userId: number) => {
        return props.disableBtnFollow.some(((id: number) => id === userId))
    }

    const onFollowBtn = (user: UserType) => {
        return (
            <button
                disabled={disableBtn(user.id)}
                onClick={() => onFollow(user.id, user.followed)}
            >
                {user.followed ? 'Unfollow' : 'Follow'}
            </button>
        )
    }

    return (
        <Root>
            {props.users.map((user) => (
                <User key={user.id} isFollow={user.followed}>

                    <StyleNavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small ? user.photos.small : Stub}
                            alt={'user photo'}/>
                    </StyleNavLink>

                    <Info>
                        <div>name: <b>{user.name}</b> </div>
                        <span>status: {user.status ? user.status : 'empty status'}</span>
                    </Info>

                    {onFollowBtn(user)}
                </User>
            ))}

            <Pagination
                currentPage={props.currentPage}
                changeCurrentPage={props.changeCurrentPage}
                totalItemsCount={props.totalItemsCout}
                pageSize={props.pageSize}
            />
        </Root>
    );
};

const hello = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(2px);
  }
  60% {
    transform:  translateY(-2px);
  }
  100% {
    transform:  translateY(0);
  }
`
const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px
`
const User = styled.div <{ isFollow: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 30px;

  border-radius: 10px;
  background-color: var(--color-bloks);
  padding: 20px;

  & button {
    padding: 10px;
    width: 100px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.isFollow ? '#ffab00' : '#2196f3;'};
    color: var(--color-bloks);
    font-size: 1rem;
    box-shadow: 2px 2px 5px #777575;
    transition: all 0.2s;

    &:hover {
      transform: translateY(2px);
      box-shadow: none;
    }
  }
`
const StyleNavLink = styled(NavLink)`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  &:hover {
    animation: ${hello} 0.5s ease-in-out;
  }
`
const Info = styled.div`
  overflow: auto;
  
  & div {
    font-size: 1.2rem;
  }

  & span {
    color: #939393;
  }
`



