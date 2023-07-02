import React, {Component} from 'react';
import './App.css';
import {Footer} from "./Component/Footer/Footer";
import {Navbar} from "./Component/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Component/News/News";
import {Music} from "./Component/Music/Music";
import {Setting} from "./Component/Setting/Setting";
import {DialogsContainer} from "./Component/Dialogs/DialogsContainer";
import {UsersConnect} from "./Component/Users/UsersContainer";
import {ConnectProfileContainer} from './Component/Profile/ProfileContainer ';
import {ConnectHeaderContainer} from "./Component/Header/HeaderContainer";
import {LoginConnect} from "./Component/Login/LoginConnect";
import {connect} from "react-redux";
import {AppStateType} from "./redax/redux-store";
import {initAppTC} from "./redax/app-reducer";
import {Spinner} from "./assets/spinner/Spinner";


export type SidebarType = {
    id: number
    name: string
    src: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    messageD: string
}
export type PostsType = {
    id: number
    message: string
    likeCounter: number
    counterDislike: number
}

type AppType = {
    initialized: boolean
    initAppTC: () => void
}

class App extends Component<AppType> {

    componentDidMount() {
        this.props.initAppTC()
    }

    render() {
        if(!this.props.initialized){
            return <Spinner/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <ConnectHeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route exact path={"/profile/:userId?"} render={() => (
                            <ConnectProfileContainer/>
                        )}/>
                        <Route path={"/message"} render={() => (
                            <DialogsContainer/>
                        )}/>
                        <Route path={"/users"} render={() => (
                            <UsersConnect/>
                        )}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/setting"} component={Setting}/>
                        <Route path={"/login"} component={LoginConnect}/>
                    </div>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

const MapStateToProps = (state: AppStateType): {initialized: boolean} => ({
    initialized: state.app.initialized
})
export const AppConnect = connect(MapStateToProps, {initAppTC})(App)