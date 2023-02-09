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

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/profile"} component={Profile}/>
                    <Route path={"/message"} component={Dialogs}/>
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
