import React, { Component } from "react";
import CartProductDescription from "./CartProductDescription";
import deleteIcon from "./roundedRectangle.png";
import "./CartItem.css";
class CartItem extends Component {
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
      deleteItem,
    } = this.props;
    return (
      <>
        <tr id="itemRow">
          <th scope="row" className="align-middle font-weight-bold" id="nr">
            {id}.
          </th>
          <td id="description">
            <CartProductDescription />
          </td>
          <td className="align-middle font-weight-bold">
            <input
              id="productNr"
              type="number "
              defaultValue={quantity}
            ></input>
          </td>
          <td className="align-middle font-weight-bold" id="unitPriceExclVAT">
            {unitPriceExclVAT}
          </td>
          <td className="align-middle font-weight-bold" id="totalVATAmount">
            {totalVATAmount}
          </td>
          <td
            className="align-middle font-weight-bold"
            id="totalPriceWhitoutVAT"
          >
            {totalPriceWhitoutVAT}
          </td>
          <td className="align-middle font-weight-bold" id="totalPriceWhithVAT">
            {totalPriceWhithVAT}
          </td>
          <td className="align-middle font-weight-bold">
            <button type="button" className="btn" id={id} onClick={deleteItem}>
              <img
                className="p-0"
                src={deleteIcon}
                alt="deleteSymbol.png"
              ></img>
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default CartItem;
