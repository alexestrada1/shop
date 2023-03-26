import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import "./App.css"
function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </Router>
  );
}

export default App;
