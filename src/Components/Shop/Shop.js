import React from "react";
import { products } from "../../Assets/products";
import "./Shop.css";
import { productImages } from "./productImgs";

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img alt={product.name} src={productImages[product.name]} />
            <hr />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
