import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/navbar";

export default function Signup() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function submit(e) {
    e.preventDefault();
    // simple mock signup
    nav("/app/income");
  }

  return (
    <div className="page">
      <TopBar />
      <div className="center-card">
        <div className="card auth-card">
          <h2>Create account</h2>
          <p className="muted">Setup a free account (demo) — you’ll be taken to Income after signup.</p>
          <form onSubmit={submit}>
            <label className="label">Email</label>
            <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label className="label">Password</label>
            <input className="input" type="password" value={pass} onChange={(e) => setPass(e.target.value)} required />
            <div style={{ marginTop: 12 }}>
              <button className="btn primary" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
