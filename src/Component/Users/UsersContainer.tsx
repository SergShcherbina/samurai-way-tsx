import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redax/redux-store";
import {followAC, setUsersAC, unFollowAC, UserType,setCurrentPageAC, setTotalUsersCountAC, setFethingAC} from "../redax/users-reducer";
import axios from "axios";
import { Users } from './Users';


type UsersContainerType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFething: boolean,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setFething: (loading: boolean) => void
}
export class UsersContainer extends React.Component<UsersContainerType>{
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        this.props.setFething(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)                
            })
            .catch((err) => {
                console.log('ОШИБКА')
            })
            .finally(()=> {
                this.props.setFething(false)
            });
    }
    changeCurrentPage = (pageNumber: number) => {
        this.props.setFething(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFething(false)
            })
            .catch((err) => {
                console.log('ОШИБКА')
            })
            .finally(()=> {
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
        isFething: state.usersPage.isFething
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
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setFething: (loading: boolean) => {
            dispatch(setFethingAC(loading))
        }
    }
}

export const UsersConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

