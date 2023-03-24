import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./Component/redax/redux-store";
import App from "./App";


export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App 
            store={store}
            state={state}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(()=> {
    const state = store.getState();                   //получаем стор самостоятельно
    rerenderEntireTree(state);
})