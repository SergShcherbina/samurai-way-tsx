import './header.module.css';
import React from 'react'
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redax/redux-store";
import {setAuthUserData} from "../redax/auth-reducer";

export class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    const {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
            .catch(() => {
                console.log('error')
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