import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/navbar";

// illustration URL (Unsplash) — feel free to download & put in src/assets/hero.jpg
const HERO_URL = "welcome-illustration.png";
export default function Welcome() {
  const nav = useNavigate();
  return (
    <div className="page hero-page">
      <TopBar />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Manage money — without stress</h1>
          <p className="hero-sub">Track your income, expenses and savings with clarity. Fast inputs, beautiful charts, calendar view.</p>

          <div className="hero-actions">
            <button className="btn primary" onClick={() => nav("/login")}>Get Started</button>
            <button className="btn ghost" onClick={() => nav("/app/overview")}>Try Demo</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={HERO_URL} alt="hero" />
        </div>
      </section>
    </div>
  );
}
