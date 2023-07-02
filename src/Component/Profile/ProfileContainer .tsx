import React, {ComponentType} from 'react'
import { Profile } from './Profile';
import { AppStateType } from '../../redax/redux-store';
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus} from '../../redax/profile-reducer';
import {withRouter} from "react-router-dom";
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
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = {
    setUserProfile: any
    getStatus: any
    updateStatus: (status: string) => void
}

export class ProfileContainer extends React.Component<PropsProfileContainerType> {
    
    componentDidMount() {
        // let userId = this.props.match.params.userId;                     //получили за счет withRouter
        // if(!userId) userId = '28520';
        let userId = this.props.userIdAuth                                  //получаем userId с сервера
        this.props.setUserProfile(userId)                                   //колбек санки
        this.props.getStatus(userId)
    }
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userIdAuth: state.auth.userId
    }
}

//compose комбинирует HOC, простая типизация<ComponentType>
//вместо mapDispatchToProps возвращаем {thunk1, thunk2}
export const ConnectProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, { setUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
