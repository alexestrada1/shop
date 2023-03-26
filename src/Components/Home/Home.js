import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Link to="/shop">
        <div className="big-div">
          <h1>Start Shopping Now!</h1>
        </div>
      </Link>
    </div>
  );
}

export default Home;
