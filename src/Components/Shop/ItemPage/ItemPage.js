import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../../Assets/products";
import "./ItemPage.css";

const ItemPage = ({ addToCart }) => {
  const { name } = useParams();
  const product = products.find((p) => p.name === name);
  const navigate = useNavigate();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAddToCartClick = () => {
    addToCart(product);
  };

  return (
    <div className="item-page">
      <div className="left">
        <button className="back-button" onClick={handleBackClick}>
          Back to Shop
        </button>
        <h1>{product.name}</h1>
        <img alt={product.name} src={product.img} />
      </div>
      <div className="right">
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button className="cart-button" onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
