import React from 'react';
import {AppStateType} from "../../../app/model/store";
import {connect} from "react-redux";
import {follow, getUsersTC, unFollow} from "../model/users-reducer";
import {UsersContainer} from "./UsersContainer";

export type mapStateToPropsUsersType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalItemsCout: state.usersPage.totalItemsCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disableBtnFollow: state.usersPage.disableBtnFollow,
    };
};

//передали вторым параметром вместо mapDispatchToProps обьект с AC или thunk
export const ConnectUsers = connect(mapStateToProps, {
    //здесь получаем callback thunk
    getUsers: getUsersTC,
    follow,
    unFollow,
})(UsersContainer);
