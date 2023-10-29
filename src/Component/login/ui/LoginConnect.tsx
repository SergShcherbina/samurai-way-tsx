import {connect} from "react-redux";
import {loginTC} from "../model/auth-reducer";
import {AppStateType} from "../../../app/model/store";
import {Login} from "./Login";

const mapStateToProps = (state: AppStateType): { isAuth: boolean } => ({
    isAuth: state.auth.isAuth,
});

export const LoginConnect = connect(mapStateToProps, {loginTC})(Login);
