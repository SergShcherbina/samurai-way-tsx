import React, {ComponentType} from 'react'
import { Profile } from './Profile';
import { AppStateType } from '../../redax/redux-store';
import {connect} from "react-redux";
import {setUser} from '../../redax/profile-reducer';
import {Redirect, withRouter} from "react-router-dom";
import { RouteComponentProps} from "react-router-dom";
import {GetProfileType} from "./ProfileInfo/ProfileInfo";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

//типизация withRouter
export type PropsProfileContainerType = RouteComponentProps<PatchParamsType> & ProfileContainerType
type ProfileContainerType =  MapStateToPropsType & MapDispatchToProps
type PatchParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: GetProfileType
}
type MapDispatchToProps = {
    setUser: any
}

export class ProfileContainer extends React.Component<PropsProfileContainerType> {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;                     //получили за счет withRouter
        if(!userId) userId = '2';
        this.props.setUser(userId)                                       //колбек санки
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/> 
        )
    }
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

//compose комбинирует HOC, простая типизация<ComponentType>
export const ConnectProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, { setUser }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
