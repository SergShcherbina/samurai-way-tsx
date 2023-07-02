import React from 'react';
import { connect } from "react-redux";
import { AppStateType } from "../../redax/redux-store";
import {
    UserType,
    getUsersTC, follow, unFollow,
} from "../../redax/users-reducer";
import { Users } from './Users';


type UsersContainerType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    disableBtnFollow: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
}


export class UsersContainer extends React.Component<UsersContainerType>{
    constructor(props: UsersContainerType) {
        super(props);
    }
    componentDidMount() {
        //вызываем колбек санки и передаем аргументы
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    changeCurrentPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return (
            <Users
                changeCurrentPage={this.changeCurrentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetching={this.props.isFetching}
                disableBtnFollow={this.props.disableBtnFollow}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
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
        isFetching: state.usersPage.isFetching,
        disableBtnFollow: state.usersPage.disableBtnFollow,
    }
}

//передали вторым параметром вместо mapDispatchToProps обьект с AC или thunk
export const UsersConnect = connect(mapStateToProps, {
    //здесь получаем callback thunk
    getUsers: getUsersTC,
    follow,
    unFollow
})(UsersContainer)
