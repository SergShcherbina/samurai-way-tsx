import React from 'react'
import { Profile } from './Profile';
import { AppStateType } from '../redax/redux-store';
import {connect} from "react-redux";
import {setUser} from '../redax/profile-reducer';
import {Redirect, withRouter} from "react-router-dom";
import { RouteComponentProps} from "react-router-dom";
import {GetProfileType} from "./ProfileInfo/ProfileInfo";

//типизация withRouter
type PropsProfileContainerType = RouteComponentProps<PatchParamsType> & ProfileContainerType
type ProfileContainerType =  MapStateToPropsType & MapDispatchToProps
type PatchParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: GetProfileType
    auth: boolean
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
        //перенаправление если не авторизован
        if(!this.props.auth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/> 
        )
    }
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        auth: state.auth.isAuth,
    }
}

//hoc который берет данные из url и добавляет в компоненту
const WithUrlDataProfileComponent = withRouter(ProfileContainer)

export const ConnectProfileContainer = connect(mapStateToProps, {
    setUser,
})(WithUrlDataProfileComponent)