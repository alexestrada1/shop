import React, { useState, useEffect } from "react";
import "../Cart/Cart.css";

const Cart = ({ cart, updateQuantity, removeItem }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price when cart changes
    const price = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotalPrice(price);
  }, [cart]);

  const handleQtyUpdate = (product, newQty) => {
    if (newQty === 0) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, newQty);
    }
  };

  return (
    <div>
      <div className="top">
      {totalPrice > 0 && (
        <h1 className="price">Price: ${totalPrice.toFixed(2)}</h1>
      )}
      <button>Checkout</button>
      </div>
      <div className="cart-container">
        {cart && cart.length > 0 ? (
          cart.map((product) => (
            <div className="item" key={product.id}>
              <button onClick={() => removeItem(product.id)}>X</button>
              <div className="product-info">
                <img alt={product.name} src={product.img} />
                <hr />
                <h3>{product.name}</h3>
                <div className="bottom">
                  <button
                    onClick={() =>
                      handleQtyUpdate(product, product.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() =>
                      handleQtyUpdate(product, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">Nothing in Cart!</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
