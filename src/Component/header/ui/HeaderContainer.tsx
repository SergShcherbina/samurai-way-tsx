import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import {logoutTC} from "../../auth/model/auth-actions";

type MapStateToPropsHeaderType = ReturnType<typeof mapStateToProps>
type HeaderContainerType = MapStateToPropsHeaderType & {
    logoutTC: () => void;
};

export class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <Header
            isAuth={this.props.isAuth}
            userName={this.props.login}
            logoutTC={this.props.logoutTC}
            profile={this.props.profile}
        />;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export const ConnectHeaderContainer = connect(mapStateToProps, {logoutTC})(HeaderContainer);
