import React, { Component } from "react";
import "./Search.css";
import logo from "./logoS.png";

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ProductStock } = this.props;
    console.log("ProductStock from app/shoppingsite/search", { ProductStock });
    return (
      <div className="container search">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
          <>
            <a className="navbar-brand" href="/home">
              <img
                id="searchLogo"
                src={logo}
                width="40"
                height="40"
                alt="logoS.png"
              />
            </a>

            <form className="form-inline mr-auto" action="/" method="GET">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control font-italic"
                  placeholder="Search products"
                  required
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary font-weight-bold"
                    type="submit"
                    id="button-search"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
          </>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle h5 mb-0 font-weight-bold"
                href="/"
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
                <a className="dropdown-item " href="/action1">
                  Action
                </a>
                <a className="dropdown-item" href="/action2">
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
                <a className="dropdown-item" href="/action1">
                  Action
                </a>
                <a className="dropdown-item" href="/action2">
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
                <p className="dropdown-item">Number of products:</p>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/ShoppingSite">
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-checkout"
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
