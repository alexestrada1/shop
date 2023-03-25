import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
function App() {
  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </Router>
  );
}

export default App;
