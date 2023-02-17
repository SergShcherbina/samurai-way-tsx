import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./Component/redax/state";


ReactDOM.render(
    <App dateState={state}/>,
    document.getElementById('root')
);