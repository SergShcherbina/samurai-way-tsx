import {AppStateType} from "../model/store";
import {connect} from "react-redux";
import {initAppTC} from "../model/app-reducer";
import {App} from "./App";

const MapStateToProps = (state: AppStateType): { initialized: boolean, isAuth: boolean } => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
});
export const ConnectApp = connect(MapStateToProps, { initAppTC })(App);
