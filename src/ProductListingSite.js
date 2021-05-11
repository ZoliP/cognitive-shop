import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";

class ProductListingSite extends Component {
  render() {
    const { ProductStock } = this.props;
    return (
      <div>
        <Header ProductStock={ProductStock} />
        <Menu ProductStock={ProductStock} />
        <SidebarMenu ProductStock={ProductStock} />
        <Footer />
      </div>
    );
  }
}

export default ProductListingSite;
