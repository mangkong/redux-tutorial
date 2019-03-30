import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
/*
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === 'changeState') {
    return action.payload.newState;
  }
  return 'initial State';
}
*/
const productReducer = (state = [], action) => {
  return state;
}

const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'updateUser':
      return action.payload;
      break;
    default:
      return state;
  }
}

const allReducer = combineReducers({
  productReducer,
  userReducer
});

// store 초기화
const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
const action = {
  type: 'updateUser',
  payload: {
    newState: 'Tom'
  }
}


store.subscribe(() => console.log('subscribe: ', store.getState()));

store.dispatch(action);
console.log(store.getState());

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
