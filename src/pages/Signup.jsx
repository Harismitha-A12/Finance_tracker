import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TopBar from "../components/navbar";

export default function Signup() {
  const nav = useNavigate();

  // State for all inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  function submit(e) {
    e.preventDefault();
    // simple mock signup (add validations here if needed)
    if (password !== retypePassword) {
      alert("Passwords do not match");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }
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
            <label className="label">Full Name</label>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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

            <label className="label">Retype Password</label>
            <input
              className="input"
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />

            <label className="label">Date of Birth</label>
            <input
              className="input"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />

            <label className="label">Gender</label>
            <select
              className="input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label className="label">Phone Number</label>
            <input
              className="input"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label className="label">Address</label>
            <textarea
              className="input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>

            <label className="label">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                style={{ marginRight: 8 }}
              />
              I accept the terms and conditions
            </label>

            {/* Separator line and login link */}
            <div style={{ margin: "12px 0", textAlign: "center" }}>
              <hr />
              <p>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#007bff" }}>Login</Link>
              </p>
            </div>

            <div style={{ marginTop: 12 }}>
              <button className="btn primary" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
