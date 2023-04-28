import React from 'react';
import { connect } from "react-redux";
import { AppStateType } from "../redax/redux-store";
import {
    follow,
    setUsers,
    unFollow,
    UserType,
    setCurrentPage,
    setTotalUsersCount,
    setFething,
    toggleDisableBtnFollow,
} from "../redax/users-reducer";
import { Users } from './Users';
import { getAPI } from '../api/api';


type UsersContainerType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFething: boolean,
    disableBtnFollow: number[]
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setFething: (loading: boolean) => void
    toggleDisableBtnFollow: (loading: boolean, userId: number) => void
}

export class UsersContainer extends React.Component<UsersContainerType>{
    constructor(props: UsersContainerType) {
        super(props);
    }
    componentDidMount() {
        this.props.setFething(true)
        getAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
            .catch((err) => {
                console.log('ОШИБКА getUsers')
            })
            .finally(() => {
                this.props.setFething(false)
            });
    }
    changeCurrentPage = (pageNumber: number) => {
        this.props.setFething(true)
        this.props.setCurrentPage(pageNumber)
        getAPI.getCurrentPage(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items)
                this.props.setFething(false)
            })
            .catch((err) => {
                console.log('ОШИБКА CurrentPage')
            })
            .finally(() => {
                this.props.setFething(false)
            });
    }
    render() {
        return (
            <Users
                changeCurrentPage={this.changeCurrentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                isFething={this.props.isFething}
                setFething={this.props.setFething}
                toggleDisableBtnFollow={this.props.toggleDisableBtnFollow}
                disableBtnFollow={this.props.disableBtnFollow}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFething: state.usersPage.isFething,
        disableBtnFollow: state.usersPage.disableBtnFollow,
    }
}

//передали вторым параметром вместо mapDispatchToProps обьект с AC
export const UsersConnect = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFething,
    toggleDisableBtnFollow,
})(UsersContainer)
