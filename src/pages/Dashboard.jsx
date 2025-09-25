import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import TopBar from "../components/navbar";

export default function DashboardLayout() {
  return (
    <div className="page app-layout">
      <TopBar />
      <div className="layout-body">
        <Sidebar />
        <main className="main-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
