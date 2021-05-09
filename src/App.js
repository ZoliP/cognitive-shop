import React, { Component } from "react";
//import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Search from "./Search";
import ProductList from "./ProductList";
import Menu from "./Menu";
import SidebarMenu from "./SidebarMenu";
import ShoppingCart from "./ShoppingCart";
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
    const { UserList, ProductStock, Cart } = this.state.Data;
    return (
      <div>
        {/* <Login UserList={UserList} /> */}
        <Search ProductList={ProductStock} />
        <ShoppingCart
          ProductList={ProductStock}
          Cart={Cart}
          UserList={UserList}
        />
        {/* <Header ProductStock={ProductStock} /> */}
        {/* <Menu ProductStock={ProductStock} /> */}
        {/* <SidebarMenu ProductStock={ProductStock} /> */}
        <ProductList ProductStock={ProductStock} />
        <Footer />
      </div>
    );
  }
}

export default App;
