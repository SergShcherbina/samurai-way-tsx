import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {store} from "./app/model/store";
import {Provider} from "react-redux";
import {ConnectApp} from "./app/ui/ConnectApp";
import {HashRouter} from "react-router-dom";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <ConnectApp/>
            </HashRouter>
        </Provider>,

        document.getElementById("root"),
    );
};
rerenderEntireTree();
