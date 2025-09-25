import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">Finance<span className="accent">Flow</span></div>
      <nav className="topbar-right">
        <Link to="/">Home</Link>
        <Link to="/app/overview">Overview</Link>
        <Link to="/about" style={{ display: "none" }}>About</Link>
        <Link to="/login" className="btn small">Login</Link>
        <Link to="/signup" className="btn small">Sign Up</Link>
      </nav>
    </header>
  );
}
