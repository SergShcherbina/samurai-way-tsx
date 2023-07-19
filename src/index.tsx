import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./redax/store";
import { AppConnect } from "./App";
import { Provider } from "react-redux";

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppConnect />
    </Provider>,

    document.getElementById("root"),
  );
};
rerenderEntireTree();
