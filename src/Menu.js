import React, { Component } from "react";
import "./Menu.css";
import cars from "./cars.png";
import trucks from "./trucks.png";
import agriculture from "./agriculture.png";
import innertubes from "./innertubes.png";
import skidchains from "./skidchains.png";
import rims from "./rims.png";
class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="topMenu container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link p-0" href="cars">
                  <div className="vehicleCard card text-center active">
                    <div className="pb-2 d-flex justify-content-center">
                      <img className="p-2" src={cars} alt="img"></img>
                    </div>
                    <h6>
                      Cars / Offroad Vehicles <br /> ATV
                    </h6>
                  </div>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link p-0" href="trucks">
                  <div className="vehicleCard card text-center">
                    <div className="pb-2 d-flex justify-content-center">
                      <img className="p-2" src={trucks} alt="img"></img>
                    </div>
                    <h6>Trucks</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link p-0" href="agriculture">
                  <div className="vehicleCard card text-center">
                    <div className="pb-2 d-flex justify-content-center">
                      <img className="p-2" src={agriculture} alt="img"></img>
                    </div>
                    <h6>Agriculture</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link p-0" href="innertubes">
                  <div className="vehicleCard card text-center">
                    <div className="pb-2 d-flex justify-content-center">
                      <img className="p-2" src={innertubes} alt="img"></img>
                    </div>
                    <h6>Inner tubes</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link p-0" href="skidchains">
                  <div className="vehicleCard card text-center">
                    <div className="pb-2 d-flex justify-content-center">
                      <img className="p-2" src={skidchains} alt="img"></img>
                    </div>
                    <h6>Skid chains</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link p-0" href="rims">
                  <div className="vehicleCard card text-center">
                    <div className="pb-2 d-flex justify-content-center">
                      <img className="p-2" src={rims} alt="img"></img>
                    </div>
                    <h6>Rims</h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
