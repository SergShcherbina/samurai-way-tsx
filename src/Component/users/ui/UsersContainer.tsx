import React from "react";
import {Users} from "./Users";
import {mapStateToPropsUsersType} from "./ConnectUsers";

export type UsersContainerType = mapStateToPropsUsersType & {
    getUsers: (currentPage: number, pageSize: number) => void;
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
};

export class UsersContainer extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <Users
                changeCurrentPage={this.changeCurrentPage}
                totalItemsCout={this.props.totalItemsCout}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetching={this.props.isFetching}
                disableBtnFollow={this.props.disableBtnFollow}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        );
    }
}

