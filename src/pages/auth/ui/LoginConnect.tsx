import {connect} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import {Login} from "./Login";
import {loginTC} from "../model/auth-actions";

const mapStateToProps = (state: AppStateType): { isAuth: boolean, captcha: string } => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
});

export const LoginConnect = connect(mapStateToProps, {loginTC})(Login);
