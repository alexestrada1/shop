import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import ItemPage from "./Components/Shop/ItemPage/ItemPage";
import Cart from "./Components/Cart/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        // If the product already exists in the cart, update the quantity
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // Otherwise, add the product to the cart with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((p) =>
        p.id === id ? { ...p, quantity: quantity } : p
      );
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== id));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <Header items={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          }
        />
        <Route
          path="/shop/:name"
          element={<ItemPage addToCart={addToCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
