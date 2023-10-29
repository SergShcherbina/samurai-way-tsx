import React from "react";
import Ava from '../../../assets/img/userAva.jpg';
import {UserType} from "../model/users-reducer";
import {Spinner} from "../../spinner/Spinner";
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

    const onSubmit = (value: any) => {
        console.log(value)
    }

    return (
        <Root>
            {/*<UsersSearchForm onSubmit={onSubmit} />*/}
            {props.users.map((user) => (
                <User key={user.id} isFollow={user.followed}>

                    <StyleNavLink to={`/profile/${user.id}`}>
                        <div>
                            <img src={user.photos.small ? user.photos.small : Ava}
                                 alt={'user photo'}
                            />
                        </div>
                        <Info>
                            <div>name: <b>{user.name}</b></div>
                            <span>status: {user.status ? user.status : 'empty status'}</span>
                        </Info>
                    </StyleNavLink>

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
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`
const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px
`
const User = styled.div <{ isFollow: boolean }>`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  border-radius: 10px;
  background-color: var(--color-bloks);
  padding: 20px 40px;

  & button {
    cursor: pointer;
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
      box-shadow: 1px 1px 1px #777575;
    }
    &:active {
      transform: translateY(3px);
      box-shadow: none;
    }
  }
`
const StyleNavLink = styled(NavLink)`
  display: flex;
  gap: 20px;
  align-items: center;
  transition: all 0.1s;
  
  & div:has(img) {
    width: 80px;
    height: 80px;
  }

  & img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &:hover {
    animation: ${hello} 0.5s ease-in-out;
  }
  
  &:active {
    transform: scale(0.98);
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


