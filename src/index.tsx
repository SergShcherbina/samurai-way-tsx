import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./Component/redax/redux-store";
import App from "./App";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>,
        </Provider>,

        document.getElementById('root')
    );
}
rerenderEntireTree()