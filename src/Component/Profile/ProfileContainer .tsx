import React from 'react'
import {PostsType} from "../../App";
import { Profile } from './Profile';
import { AppStateType } from '../redax/redux-store';
import {connect} from "react-redux";
import axios from 'axios';
import { setUserProfile } from '../redax/profile-reducer';
import { withRouter } from "react-router-dom";

export type ProfileType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: {type: string}) => void
}

export class ProfileContainer extends React.Component<any, any> {
    
    componentDidMount() {
        // this.props.setFething(true)
        let userId = this.props.match.params.userId;                     //получили за счет withRouter
        if(!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
        {
            withCredentials: true
        })
            .then(response => {
                this.props.setUserProfile(response.data)
            })
            .catch((err) => {
                console.log('ОШИБКА')
            })
            .finally(()=> {
                // this.props.setFething(false)
            });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/> 
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

//hoc который берет данные из url и добавляет в компоненту
const WithUrlDataProfileComponent = withRouter(ProfileContainer)

export const ConnectProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(WithUrlDataProfileComponent)