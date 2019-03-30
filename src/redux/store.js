import {createStore} from "redux";
import {allReducer} from "./reducers";
// import .js -> 해당폴더->index.js
// store 초기화
export const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);