import React from 'react';
import {connect} from "react-redux";
import {Users} from "./UsersClass";
import {AppStateType} from "../redax/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../redax/users-reducer";


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

