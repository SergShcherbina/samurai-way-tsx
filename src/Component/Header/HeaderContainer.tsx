import './header.module.css';
import React from 'react'
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redax/redux-store";
import {setAuthUserData} from "../redax/auth-reducer";
import { getAPI } from '../api/api';

export class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        getAPI.getAuthMe()
            .then(response => {
                if(response.resultCode === 0){
                    const {id, email, login} = response.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
            .catch(() => {
                console.log('error getAuthMe')
            })
    }

    render () {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const ConnectHeaderContainer =  connect(mapStateToProps, {setAuthUserData})(HeaderContainer)