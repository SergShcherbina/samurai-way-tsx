import {AppStateType} from "../model/store";
import {connect} from "react-redux";
import {initAppTC} from "../model/app-reducer";
import {App} from "./App";

const MapStateToProps = (state: AppStateType): { initialized: boolean } => ({
    initialized: state.app.initialized,
});
export const ConnectApp = connect(MapStateToProps, { initAppTC })(App);
