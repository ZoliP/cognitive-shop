import React, { Component } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";
class ProductList extends Component {
  render() {
    const { ProductStock } = this.props;
    const list = ProductStock.map((product) => {
      return (
        <ProductCard
          key={product.id}
          id={product.id}
          category={product.category}
          make={product.make}
          type={product.type}
          size={product.size}
          speedIndex={product.speedIndex}
          loadIndex={product.loadIndex}
          fuelIndex={product.fuelIndex}
          weatherIndex={product.weatherIndex}
          noisIndex={product.noisIndex}
          season={product.season}
          stock={product.stock}
          price={product.price}
          reducedPrice={product.reducedPrice}
        />
      );
    });
    console.log(list);
    return (
      <div className="container p-0">
        <div className="row d-flex justify-content-around">{list}</div>
      </div>
    );
  }
}

export default ProductList;
