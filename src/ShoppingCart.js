import React, { Component } from "react";
import CartItem from "./CartItem";
import "./ShoppingCart.css";
class ShoppingCart extends Component {
  state = {};
  render() {
    const cartContent = this.props.Cart.map((item) => {
      return (
        <CartItem
          userId={item.userId}
          key={item.id}
          id={item.id}
          productId={item.productId}
          quantity={item.quantity}
          totalPriceWhithVAT={item.totalPriceWhithVAT}
          totalPriceWhitoutVAT={item.totalPriceWhitoutVAT}
          totalVATAmount={item.totalVATAmount}
          unitPriceExclVAT={item.unitPriceExclVAT}
        />
      );
    });
    console.log(cartContent);
    return (
      <div className="container">
        <h4 className="h4 font-weight-bold text-dark">
          Shopping cart summary:
        </h4>
        <table className="table bg-light text-center align-items-center">
          <thead className="">
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit price exclusive of VAT</th>
              <th scope="col">VAT amount</th>
              <th scope="col">Total without VAT</th>
              <th scope="col">Total with VAT</th>
              <th scope="col" className="font-weight-bold">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">{cartContent}</tbody>
        </table>
      </div>
    );
  }
}

export default ShoppingCart;
