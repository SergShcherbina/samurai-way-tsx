import React from "react";
import {AppStateType} from "../../../app/model/store";
import {connect} from "react-redux";
import {getMyFriendsTC, searchUsersTC} from "../../users/model/users-reducer";
import {Friends} from "./Friends";

export type MapStateToPropsFriendsType = ReturnType<typeof mapStateToProps>
export type FriendsContainerType = MapStateToPropsFriendsType & {
    getMyFriends: () => void
    searchUsers: (value: string) => void
}

export class FriendsContainer extends React.Component<FriendsContainerType> {
    constructor(props: FriendsContainerType) {
        super(props);
    }

    componentDidMount() {
        this.props.getMyFriends()
    }

    render() {
        return (
            <>
                <Friends
                    friends={this.props.friends}
                    friendsCount={this.props.friendsCount}
                    searchUsers={this.props.searchUsers}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.usersPage.friends,
        friendsCount: state.usersPage.friendsCount
    }
};

export const ConnectFriends = connect(mapStateToProps,
    {
        getMyFriends: getMyFriendsTC,
        searchUsers: searchUsersTC,
    }
)(FriendsContainer)

