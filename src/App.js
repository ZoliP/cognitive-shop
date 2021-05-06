import React, { Component } from "react";
//import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Data from "./data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data,
    };
  }
  state = {};
  render() {
    const { UserList, ProductList } = this.state.Data;
    return (
      <div>
        {/* <Login UserList={UserList} /> */}
        <Search ProductList={ProductList} />
      </div>
    );
  }
}

export default App;
