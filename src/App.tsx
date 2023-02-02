import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {Footer} from "./Component/Footer/Footer";
import {Navbar} from "./Component/Navbar/Navbar";
import {Profile} from "./Component/Profile/Profile";

function App() {
    return (
        <>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
            <Footer/>
        </>

);
}

export default App;
