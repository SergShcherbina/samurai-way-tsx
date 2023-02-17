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

export type Data = {
    dateState: DataType
}
export type DataType = {
    dialogsData: ArrayDataType[]
    messageData: ArrayDataMessageType[]
    myPostData: PostDataType[]
    friendData: FriendDataType[]
}
export type ArrayDataType = {
    id: number
    name: string
}
export type ArrayDataMessageType = {
    id: number
    messageD: string
}
export type PostDataType = {
    id: number
    message: string
    likeCount: number
    counterDislike: number
}
export type FriendDataType = {
    id: number
    name: string
    src: string
}

function App(props: Data) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendData={props.dateState.friendData} />
                <div className="app-wrapper-content">
                    <Route path={"/profile"} render={() => <Profile myPostData={props.dateState.myPostData}/>}/>
                    <Route path={"/message"} render={() => {
                        return (
                            <Dialogs dialogsData={props.dateState.dialogsData}
                                     messageData={props.dateState.messageData}/>
                        )
                    }}/>
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