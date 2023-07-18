import { connect } from "react-redux";
import { loginTC } from "../../redax/auth-reducer";
import { Login } from "./Login";
import { AppStateType } from "../../redax/store";

const mapStateToProps = (state: AppStateType): { isAuth: boolean } => ({
  isAuth: state.auth.isAuth,
});

export const LoginConnect = connect(mapStateToProps, { loginTC })(Login);
