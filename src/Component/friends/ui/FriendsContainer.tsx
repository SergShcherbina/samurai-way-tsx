import React, {useEffect} from "react";
import {AppStateType} from "../../../app/model/store";
import {connect} from "react-redux";
import {getMyFriendsTC} from "../../users/model/users-reducer";
import {Friends} from "./Friends";


export type FriendsType = MapStateToPropsFriendsType & {
    getMyFriends: () => void
}

export class FriendsContainer extends React.Component<FriendsType> {
    constructor(props: FriendsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getMyFriends()
    }

    render() {
        return (
            <>
                <Friends friends={this.props.friends}/>
            </>
        )
    }

}

export type MapStateToPropsFriendsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.usersPage.friends
    }
}
export const ConnectFriends = connect(mapStateToProps, {getMyFriends: getMyFriendsTC})(FriendsContainer)

