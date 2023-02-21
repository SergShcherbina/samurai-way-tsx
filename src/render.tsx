import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Component/redax/state";


export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App dateState={state} addPost={addPost} />,
        document.getElementById('root')
    );
}
