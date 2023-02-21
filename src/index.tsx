import React from 'react';
import './index.css';
import {state} from "./Component/redax/state";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);