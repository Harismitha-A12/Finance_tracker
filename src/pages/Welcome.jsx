import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Track your finances effortlessly</h1>
        <p>
          Manage your <b>income</b>, <b>expenses</b>, and <b>savings</b> with ease.  
          Set goals and achieve financial freedom.
        </p>
        <Link to="/login">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
