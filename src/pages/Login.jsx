import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TopBar from "../components/navbar";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    // mock: any credentials accepted. In real app, call backend here.
    nav("/app/income");
  }

  return (
    <div className="page">
      <TopBar />
      <div className="center-card">
        <div className="card auth-card">
          <h2>Welcome back</h2>
          <p className="muted">Sign in to continue to FinanceFlow</p>
          <form onSubmit={submit}>
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
              <button className="btn primary" type="submit">Login</button>
              <Link to="/signup" className="btn ghost">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
