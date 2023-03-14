import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./Component/redax/state";
import App, { StateType} from "./App";


export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App dataState={state}
             dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)