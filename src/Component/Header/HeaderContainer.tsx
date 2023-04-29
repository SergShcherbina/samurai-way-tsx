import './header.module.css';
import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../redax/redux-store";
import {authUser} from "../redax/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string
}
type HeaderContainerType = {
    isAuth: boolean,
    login: string,
    authUser: () => void

}
export class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.authUser()
    }

    render () {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const ConnectHeaderContainer =  connect(mapStateToProps, {authUser})(HeaderContainer)