import "./header.module.css";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import {logoutTC} from "../../login/auth-reducer";

type MapStateToPropsHeaderType = ReturnType<typeof mapStateToProps>
type HeaderContainerType = MapStateToPropsHeaderType & {
    logoutTC: () => void;
};

export class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export const ConnectHeaderContainer = connect(mapStateToProps, {logoutTC})(HeaderContainer);
