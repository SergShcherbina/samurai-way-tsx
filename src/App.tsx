import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {Footer} from "./Component/Footer/Footer";
import {Navbar} from "./Component/Navbar/Navbar";
import {Profile} from "./Component/Profile/Profile";
import {Dialogs} from "./Component/Dialogs/Dialogs";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {News} from "./Component/News/News";
import {Music} from "./Component/Music/Music";
import {Setting} from "./Component/Setting/Setting";


export type RedaxType = {
    dataState: StateType
    addPost: (valueTextarea: string) => void
    updateNewPostText: (postText: string) => void
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
}
export type DialogsType = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
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

function App(props: RedaxType) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.dataState.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path={"/profile"} render={() => (
                        <Profile
                            posts={props.dataState.profilePage.posts}
                            addPost={props.addPost}
                            newPostText={props.dataState.profilePage.newPostText}
                            updateNewPostText={props.updateNewPostText}
                        />
                    )}/>
                    <Route path={"/message"} render={() => (
                        <Dialogs dialogsData={props.dataState.dialogsPage.dialogsData }
                                 messageData={props.dataState.dialogsPage.messageData }/>
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