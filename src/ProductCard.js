import React, { Component } from "react";
import "./ProductCard.css";
import summer from "./summer30x30.png";
import fuel from "./fuel.png";
import grip from "./grip.png";
import noise from "./noise.png";
class ProductCard extends Component {
  render() {
    const { ProductList } = this.props;
    console.log("productlist from card", { ProductList });
    return (
      <div className="productCard card">
        <div className="card-body ">
          <div className="d-flex justify-content-between align-items-baseline font-weight-bold p-0">
            <h5 className="card-title h4 m-0 ">Pirelli</h5>
            <h5 className="card-title h5 mb-1">
              <img className="p-0" src={summer} alt="summer"></img>
              &nbsp;&nbsp;&nbsp;
            </h5>
          </div>
          <div className="d-flex justify-content-between p-0">
            <p className="card-text">P Zero</p>
            <p className="small">SUMMER</p>
          </div>
          <div className="d-flex justify-content-between font-weight-bold p-0">
            <h5 className="h5">205/55/R16</h5>
            <h5 className="h5">
              82&nbsp; T&nbsp; <i className="fa fa-info-circle"></i>
            </h5>
          </div>
          <div className="d-flex justify-content-start font-weight-bold p-0">
            <div className="fuelClass rounded d-flex justify-content-between align-items-center">
              <img className="p-1 " src={fuel} alt="fuel" />
              <p className="m-0">G &nbsp;</p>
            </div>
            <div className="gripClass rounded d-flex justify-content-between align-items-center">
              <img className="p-1" src={grip} alt="grip" />
              <p className="m-0">E &nbsp;</p>
            </div>
            <div className="noiseClass rounded d-flex justify-content-between align-items-center">
              <img className="p-1" src={noise} alt="noise" />
              <p className="m-0">73 &nbsp;</p>
            </div>
          </div>
          <h5 className="fullPrice h5 font-italic font-weight-bold mb-0 mt-4">
            475.00 LEI
          </h5>
          <h3 className="reducedPrice h3 font-weight-bold ">475.00 LEI</h3>
          <h6 className="available h6 font-weight-bold mb-2 ml-2 ">
            Available
          </h6>
          <button href="#" className="addToCart btn btn-primary">
            <select className="font-weight-bold" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            &nbsp;
            <i className="fa fa-shopping-cart text-white"></i> Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
