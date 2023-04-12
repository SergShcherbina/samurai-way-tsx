import React from 'react';
import {connect} from "react-redux";
import {UsersClass} from "./UsersClass";
import {AppStateType} from "../redax/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType,setCurrentPageAC, setTotalUsersCountAC} from "../redax/users-reducer";


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

