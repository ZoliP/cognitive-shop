import React, { Component } from "react";
import "./Header.css";
import winter from "./winterWhite.png";
import Search from "./Search";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="jumbotron jumbotron-fluid bg-white mb-0 p-0">
          <Search />
          <div className="container">
            <h1 className="best display-4 font-weight-bold mb-0 text-white">
              Best Offers On Winter Tires
            </h1>
            <p className="lead text-white">
              Tires for cars, trucks, vans and agricultural vehicles
            </p>
            <div class="d-flex justify-content-between col-3 p-0">
              <h6 className="make display-4 font-weight-bold text-white mb-0">
                Pirelli
              </h6>
              <h6 className="make display-4 text-white mb-0">
                <img className="p-0" src={winter} width="40" height="40"></img>
                &nbsp;
              </h6>
            </div>
            <div class="d-flex justify-content-between col-3 p-0">
              <p className="makeLead text-white h6">P Zero</p>
              <p className="makeLead text-white font-weight-bold h6 mb-0">
                WINTER
              </p>
            </div>
            <h6 className="fullPrice display-4 font-italic font-weight-bold mb-0 text-white">
              475.00 Lei
            </h6>
            <h1 className="reducedPrice display-4 font-weight-bold mb-0">
              475.00 Lei
            </h1>
            <button
              className="btn btn-primary font-weight-bold"
              type="button"
              id="button-promo"
            >
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
