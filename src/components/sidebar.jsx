import React from "react";
import { NavLink } from "react-router-dom";
import { FaDollarSign, FaChartPie, FaCalendarAlt, FaWallet } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">Menu</div>
      <nav className="sidebar-nav">
        <NavLink to="/app/income" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaDollarSign /> Income
        </NavLink>
        <NavLink to="/app/expenses" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaWallet /> Expenses
        </NavLink>
        <NavLink to="/app/savings" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaChartPie /> Savings
        </NavLink>
        <NavLink to="/app/overview" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaCalendarAlt /> Overview
        </NavLink>
      </nav>
    </aside>
  );
}
