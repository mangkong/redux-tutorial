import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";
import App from "../../App";
import {connect} from "react-redux";

export const allReducer = combineReducers({
  products : productReducer,
  users : userReducer
});

