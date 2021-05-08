import React, { Component } from "react";
//import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import ProductList from "./ProductList";
import Menu from "./Menu";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";
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
    const { UserList, ProductStock } = this.state.Data;
    return (
      <div>
        {/* <Login UserList={UserList} /> */}
        <Header ProductList={ProductList} />
        <Menu ProductList={ProductList} />
        <SidebarMenu ProductStock={ProductStock} />
        {/* <ProductList ProductStock={ProductStock} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
