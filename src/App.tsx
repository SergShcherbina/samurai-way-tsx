import React from 'react';
import './App.css';
import {Technologies} from "./Component/Technologies"
import {Header} from "./Component/Header";
import {Footer} from "./Component/Footer";
import {Navbar} from "./Component/Navbar";
import {Profile} from "./Component/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
