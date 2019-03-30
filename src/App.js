import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.users.user}</p>
        <button onClick={()=>this.props.zzz('KiM')}>버튼</button>
      </div>
    );
  }
}

// store의 state를 props에 매핑
const mapStateToProps = (state) => ({
  products : state.products,
  users : state.users
});

// 액션을 디스패치하는 펑션을 props에 매핑
const mapActionToProps = (dispatch) => ({
  zzz: (name) => dispatch(updateUser(name))
});

export default connect(mapStateToProps, mapActionToProps)(App);
//export default App;
