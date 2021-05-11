import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ShoppingSite from "./ShoppingSite";
import ProductListingSite from "./ProductListingSite";
import Data from "./data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data,
    };
  }

  render() {
    const { UserList, ProductStock, Cart } = this.state.Data;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} UserList={UserList} />}
          />
          <Route
            path="/ShoppingSite"
            render={(props) => (
              <ShoppingSite
                Cart={Cart}
                {...props}
                ProductStock={ProductStock}
              />
            )}
          />
          <Route
            path="/ProductListingSite"
            render={(props) => (
              <ProductListingSite {...props} ProductStock={ProductStock} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
