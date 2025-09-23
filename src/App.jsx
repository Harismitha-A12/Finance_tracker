import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import "./App.css"; // add styles

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">💰 Finance Tracker</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
