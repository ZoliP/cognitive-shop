import React, { Component } from "react";
import "./Search.css";
import logo from "./logoS.png";

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ProductList } = this.props;
    console.log({ ProductList });
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
          <a className="navbar-brand" href="#">
            <img
              id="searchLogo"
              src={logo}
              width="40"
              height="40"
              alt="logoS.png"
            />
          </a>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          ></div>
          <div className="input-group">
            <input
              type="text"
              className="form-control font-italic"
              placeholder="Search products"
            />
            <div className="input-group-append w-50">
              <button
                className="btn btn-primary font-weight-bold"
                type="button"
                id="button-addon2"
              >
                SEARCH
              </button>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle h5 mb-0 font-weight-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;My account &nbsp;
                <i className="fa fa-angle-down"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item " href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle h5 mb-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;Favorites&nbsp;
                <i className="fa fa-angle-down"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle h5 mb-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-shopping-cart"></i>
                &nbsp;Cart&nbsp;
                <i className="fa fa-angle-down"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Number of products:
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Checkout cart
                  </button>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Search;
