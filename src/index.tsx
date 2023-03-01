import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {state, addPost, updateNewPostText, subscribe} from "./Component/redax/state";
import App, { StateType} from "./App";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App dataState={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText} />,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)