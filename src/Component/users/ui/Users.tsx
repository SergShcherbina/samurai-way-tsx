import React from "react";
import Ava from '../../../assets/img/userAva.jpg';
import {Spinner} from "../../spinner/Spinner";
import {NavLink} from "react-router-dom";
import {Pagination} from "./pagination/Pagination";
import styled, {keyframes} from "styled-components";
import {UserSearchForm, UserSearchFormType} from "./UserSearchForm";
import {UserType} from "../model/users-types";
import {Button} from "../../Button/button";

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
    searchUser: (valueSearch: string) => void;
};

export const Users = (props: UsersType) => {

    const onFollow = (userId: number, follow: boolean) => {
        follow ? props.unFollow(userId) : props.follow(userId)
    }

    const disableBtn = (userId: number) => {
        return props.disableBtnFollow.some(((id: number) => id === userId))
    }

    const onFollowBtn = (user: UserType) => {
        return (
            <Button
                disabled={disableBtn(user.id)}
                onClick={() => onFollow(user.id, user.followed)}
            >
                {user.followed ? 'Unfollow' : 'Follow'}
            </Button>
        )
    };

    const onSubmit = (valueSearch: UserSearchFormType) => {
        props.searchUser(valueSearch.value)
    }

    return (
        <Root>
            <UserSearchForm onSubmit={onSubmit}/>
            {props.isFetching
                ?
                <Spinner/>
                :
                props.users.map((user: UserType) => (
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
                ))
            }

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
  justify-content: space-between;
  gap: 10px;
  height: 100%;
`
const User = styled.div <{ isFollow: boolean }>`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  border-radius: 10px;
  background-color: var(--block-color);
  padding: 20px 40px;

  & button {
    width: 100px;
    background-color: ${props => props.isFollow ? '#ffab00' : '#2196f3;'};
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



