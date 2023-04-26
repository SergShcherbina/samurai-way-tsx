import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {Footer} from "./Component/Footer/Footer";
import {Navbar} from "./Component/Navbar/Navbar";
import {Profile} from "./Component/Profile/Profile";
import {DialogsType} from "./Component/Dialogs/Dialogs";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {News} from "./Component/News/News";
import {Music} from "./Component/Music/Music";
import {Setting} from "./Component/Setting/Setting";
import {DialogsContainer} from "./Component/Dialogs/DialogsContainer";
import {UsersConnect} from "./Component/Users/UsersContainer";
import { ConnectProfileContainer } from './Component/Profile/ProfileContainer ';



export type RedaxType = {
    dataState: StateType
    dispatch: (action: {type: string, text?: string}) => void
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsType
    sidebar: SidebarType[]

}
export type SidebarType = {
    id: number
    name: string
    src: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: any
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
function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar />
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
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;