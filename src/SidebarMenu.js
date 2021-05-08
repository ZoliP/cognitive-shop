import React, { Component } from "react";
import "./SidebarMenu.css";
import ProductList from "./ProductList";
class SidebarMenu extends Component {
  state = {};
  render() {
    const { ProductStock } = this.props;
    return (
      <div className="container">
        <div className="d-flex">
          {/* Tab List */}
          <div className="sidebar mr-3 ">
            <div
              className="list-group list-group-flush"
              id="list-tab"
              role="tablist"
            >
              <a
                className="list-group-item list-group-item list-group-item-action "
                id="list-pirelli-list"
                data-toggle="list"
                href="#pirelli"
                role="tab"
                aria-controls="pirelli"
              >
                Pirelli
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-michelin-list"
                data-toggle="list"
                href="#michelin"
                role="tab"
                aria-controls="michelin"
              >
                Michelin
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-hankook-list"
                data-toggle="list"
                href="#hankook"
                role="tab"
                aria-controls="hankook"
              >
                Hankook
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-goodyear-list"
                data-toggle="list"
                href="#goodyear"
                role="tab"
                aria-controls="goodyear"
              >
                Goodyear
              </a>
            </div>
          </div>
          {/* Tab content */}

          <div className="col-10 p-0">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="pirelli"
                role="tabpanel"
                aria-labelledby="list-pirelli-list"
              >
                <h3 className="text-uppercase h3 text-dark font-weight-bold m-3">
                  Pirelli
                </h3>
                <div className="dropdown-divider bg-primary ml-2"></div>
                <ProductList ProductStock={ProductStock} />
              </div>
              <div
                className="tab-pane fade"
                id="michelin"
                role="tabpanel"
                aria-labelledby="list-michelin-list"
              >
                <h3 className="text-uppercase h3 text-dark font-weight-bold m-3">
                  Michelin
                </h3>
                <div className="dropdown-divider bg-primary"></div>
                <ProductList ProductStock={ProductStock} />
              </div>
              <div
                className="tab-pane fade"
                id="hankook"
                role="tabpanel"
                aria-labelledby="list-hankook-list"
              >
                <h3 className="text-uppercase h3 text-dark font-weight-bold m-3">
                  Hankook
                </h3>
                <div className="dropdown-divider bg-primary"></div>
                <ProductList ProductStock={ProductStock} />
              </div>
              <div
                className="tab-pane fade"
                id="goodyear"
                role="tabpanel"
                aria-labelledby="list-goodyear-list"
              >
                <h3 className="text-uppercase h3 text-dark font-weight-bold m-3">
                  Goodyear
                </h3>
                <div className="dropdown-divider bg-primary"></div>
                <ProductList ProductStock={ProductStock} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarMenu;
