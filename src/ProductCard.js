import React, { Component } from "react";
import "./ProductCard.css";
import summer from "./summer30x30.png";
import fuel from "./fuel.png";
import grip from "./grip.png";
import noise from "./noise.png";
class ProductCard extends Component {
  availableStock(num) {
    let str = [];
    for (let i = 1; i <= num; i++) {
      str.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    return str;
  }

  isAvailable(num) {
    let text = "Out of stock !";
    if (num !== 0) {
      text = "Available";
    }
    return text;
  }
  render() {
    const {
      id,
      category,
      make,
      type,
      size,
      speedIndex,
      loadIndex,
      fuelIndex,
      weatherIndex,
      noisIndex,
      season,
      stock,
      price,
      reducedPrice,
    } = this.props;
    const numbersAvailable = this.availableStock(parseInt(stock));
    const availability = this.isAvailable(parseInt(stock));
    return (
      <div className="productCard card cards m-2">
        <div className="card-body p-0 pt-3">
          <div className="d-flex justify-content-between align-items-baseline p-0">
            <h5 className="card-title font-weight-bold h5 m-0 ">{make}</h5>
            <h6 className="card-title h6 mb-1">
              <img className="p-0" src={summer} alt="summer.png"></img>
              &nbsp;&nbsp;&nbsp;
            </h6>
          </div>
          <div className="d-flex justify-content-between p-0">
            <p className="card-text">{type}</p>
            <p className="small text-uppercase font-weight-bold">{season}</p>
          </div>
          <div className="d-flex justify-content-between p-0">
            <h6 className=" font-weight-bold h6">{size}</h6>
            <h6 className="h6">
              {speedIndex}&nbsp; {loadIndex}&nbsp;
              <i className="fa fa-info-circle"></i>
            </h6>
          </div>
          <div className="d-flex justify-content-start font-weight-bold p-0">
            <div className="fuelClass rounded d-flex justify-content-between align-items-center">
              <img className="p-1" src={fuel} alt="fuel.png" />
              <p className="m-0">{fuelIndex} &nbsp;</p>
            </div>
            <div className="gripClass rounded d-flex justify-content-between align-items-center">
              <img className="p-1" src={grip} alt="grip.png" />
              <p className="m-0">{weatherIndex} &nbsp;</p>
            </div>
            <div className="noiseClass rounded d-flex justify-content-between align-items-center">
              <img className="p-1" src={noise} alt="noise.png" />
              <p className="m-0">{noisIndex} &nbsp;</p>
            </div>
          </div>
          <h6 className="fullPrice h6 font-italic font-weight-bold mb-0 mt-4">
            {parseFloat(price).toFixed(2)} LEI
          </h6>
          <h4 className="reducedPrice h4 font-weight-bold ">
            {parseFloat(reducedPrice).toFixed(2)} LEI
          </h4>
          <h6 className="available h6 font-weight-bold mb-2 ml-2 ">
            {availability}
          </h6>
          <button
            href="cart"
            className="addToCart btn btn-primary p-1"
            type="submit"
          >
            <label htmlFor="tireNr"></label>
            <select
              id="tireNr"
              name="tireNr"
              className="font-weight-bold"
              id="quantity"
            >
              {numbersAvailable}
            </select>
            &nbsp;
            <i className="fa fa-shopping-cart  text-white"></i> Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
