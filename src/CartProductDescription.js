import React, { Component } from "react";
import summer from "./summer30x30.png";
import fuel from "./fuel.png";
import grip from "./grip.png";
import noise from "./noise.png";
import "./CartProductDescription.css";
class CartItemDescription extends Component {
  state = {};
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
    return (
      <div className="cartItemCard card cards">
        <div className="">
          <div className="row">
            <div className="col col-3">
              <h5 className="card-title font-weight-bold h5 m-0 ">
                {make}Pirelli
              </h5>
              <p className="card-text">{type}P Zero</p>
            </div>
            <div className="col col-9">
              <div className="row">
                <div className="col-6">
                  <h6 className="font-weight-bold h6 m-0">{size}255/95/R16</h6>
                </div>
                <div className="col-3">
                  <h6 className="h6 m-0">
                    {speedIndex}91&nbsp; {loadIndex}T&nbsp;
                  </h6>
                </div>
              </div>
              <div className="row" id="symbols">
                <div className="fuelClass p-0 rounded d-flex justify-content-between align-items-center">
                  <img className="p-1" src={fuel} alt="fuel.png" />
                  <p className="m-0">{fuelIndex}G &nbsp;</p>
                </div>
                <div className="gripClass p-0 rounded d-flex justify-content-between align-items-center">
                  <img className="p-1" src={grip} alt="grip.png" />
                  <p className="m-0">{weatherIndex}E &nbsp;</p>
                </div>
                <div className="noiseClass p-0 rounded d-flex justify-content-between align-items-center">
                  <img className="p-1" src={noise} alt="noise.png" />
                  <p className="m-0">{noisIndex}73 &nbsp;</p>
                </div>
                <div className="seasonClass p-0 rounded d-flex justify-content-between align-items-center">
                  <img
                    className="p-1"
                    width="25px"
                    heigth="25px"
                    src={summer}
                    alt="summer.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItemDescription;
