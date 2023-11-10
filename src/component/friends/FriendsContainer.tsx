import React from "react";
import {AppStateType} from "../../app/model/store";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {getFriendsTC} from "../../pages/users/model/users-actions";

export type FriendsMSTPType = ReturnType<typeof mapStateToProps>
export type FriendsContainerType = FriendsMSTPType & {
    getFriends: (page: number, value: string, isSearch: boolean) => void
}

export class FriendsContainer extends React.Component<FriendsContainerType, { page: number }> {
    constructor(props: FriendsContainerType) {
        super(props);
        this.state = {page: 1};
    }

    componentDidMount() {
        this.props.getFriends(1, '', false )
    }

    render() {
        return (
            <>
                <Friends
                    friends={this.props.friends}
                    friendsCount={this.props.friendsCount}
                    getFriends={this.props.getFriends}
                    isFetching={this.props.isFetching}
                    errorMessage={this.props.errorMessage}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.usersPage.friends,
        friendsCount: state.usersPage.friendsCount,
        isFetching: state.usersPage.isFetching,
        errorMessage: state.usersPage.errorMessage
    }
};

export const ConnectFriends = connect(mapStateToProps,
    {
        getFriends: getFriendsTC,
    }
)(FriendsContainer)

