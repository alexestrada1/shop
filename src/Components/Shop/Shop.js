import React from "react";
import { products } from "../../Assets/products";
import "./Shop.css";
import { Link, Route, Routes } from "react-router-dom";
import ItemPage from "./ItemPage/ItemPage";

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <Link to={`/shop/${product.name}`}>
              <img alt={product.name} src={product.img} />
              <hr />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/shop/:name" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default Shop;
