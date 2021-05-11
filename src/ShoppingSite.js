import React, { Component } from "react";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";
import OrderFinalization from "./OrderFinalization";
import Data from "./data";
class ShoppingSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data,
    };
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(ev) {
    const selectedItem = parseInt(ev.target.id);
    console.log("deleted item id", ev.target.id);
    const { Cart } = this.state.Data;
    const newCart = Cart.filter((item) => {
      return item.id !== selectedItem;
    });
    this.setState({ Cart: newCart });
    alert("delete");
  }

  render() {
    const { ProductStock, Cart } = this.props;
    console.log("ProductStock from app/shoppingsite", { ProductStock });
    return (
      <div>
        <Search ProductStock={ProductStock} />
        <ShoppingCart Cart={Cart} deleteItem={this.deleteItem} />
        <OrderFinalization Cart={Cart} />
      </div>
    );
  }
}

export default ShoppingSite;
