import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import {combineReducers, createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import {store} from "./redux/store";
import {updateUser} from "./redux/actions";
/*
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === 'changeState') {
    return action.payload.newState;
  }
  return 'initial State';
}
*/

//console.log(store);
//console.log(store.getState());

//action dispatch
/*
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}
*/

store.dispatch(updateUser('Jane'));

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}><App/></Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
