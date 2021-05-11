import React, { Component } from "react";
import CartItem from "./CartItem";
import "./ShoppingCart.css";
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Cart, deleteItem } = this.props;
    const cartContent = Cart.map((item) => {
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
          deleteItem={deleteItem}
        />
      );
    });
    return (
      <div className="container w-75">
        <h4 className="h4 font-weight-bold text-dark mt-5 ml-5">
          Shopping cart summary:
        </h4>
        <table className="table bg-light text-center align-items-center">
          <thead>
            <tr>
              <th className="align-middle" scope="col"></th>
              <th className="align-middle" scope="col">
                Product
              </th>
              <th className="align-middle" scope="col">
                Quantity
              </th>
              <th className="align-middle" scope="col">
                Unit price exclusive of VAT
              </th>
              <th className="align-middle" scope="col">
                VAT amount
              </th>
              <th className="align-middle" scope="col">
                Total without VAT
              </th>
              <th className="align-middle" scope="col">
                Total with VAT
              </th>
              <th className="align-middle font-weight-bold" scope="col">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {cartContent}
            <tr>
              <td></td>
              <td
                colSpan="4"
                className=" total font-weight-bold text-secondary "
              >
                Total products
              </td>
              <td className="font-weight-bold "> 3788.99 RON</td>
              <td className="font-weight-bold "> 4800.00 RON</td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShoppingCart;
