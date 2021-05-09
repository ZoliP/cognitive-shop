import React, { Component } from "react";
import CartProductDescription from "./CartProductDescription";
import deleteIcon from "./roundedRectangle.png";
import "./CartItem.css";
class CartProduct extends Component {
  state = {};
  render() {
    const {
      id,
      productId,
      quantity,
      totalPriceWhithVAT,
      totalPriceWhitoutVAT,
      totalVATAmount,
      unitPriceExclVAT,
    } = this.props;
    return (
      <tr id="itemRow">
        <th scope="row" className="align-middle font-weight-bold">
          {id}.
        </th>
        <td>
          <CartProductDescription />
        </td>
        <td className="align-middle">
          <input id="productNr" type="number " value={quantity}></input>
        </td>
        <td className="align-middle">{unitPriceExclVAT}</td>
        <td className="align-middle">{totalVATAmount}</td>
        <td className="align-middle">{totalPriceWhitoutVAT}</td>
        <td className="align-middle">{totalPriceWhithVAT}</td>
        <td className="align-middle">
          <img className="p-0" src={deleteIcon} alt="deleteSymbol.png"></img>
        </td>
      </tr>
    );
  }
}

export default CartProduct;
