import React, { Component } from "react";
//import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Menu from "./Menu";
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
        <Login UserList={UserList} />
        <Header ProductList={ProductList} />
        <Menu ProductList={ProductList} />
        <ProductCard ProductList={ProductList} />
      </div>
    );
  }
}

export default App;
