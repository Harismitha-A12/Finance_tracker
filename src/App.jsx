import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./pages/Dashboard";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Savings from "./pages/Savings";
import Overview from "./pages/overview";

import { seedDemoIfEmpty } from "./utils/seedDemo.js";

export default function App() {
  // seed demo data so charts aren't empty at first load
  useEffect(() => {
    seedDemoIfEmpty();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/app" element={<DashboardLayout />}>
        {/* default -> income */}
        <Route index element={<Navigate to="income" replace />} />
        <Route path="income" element={<Income />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="savings" element={<Savings />} />
        <Route path="overview" element={<Overview />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
