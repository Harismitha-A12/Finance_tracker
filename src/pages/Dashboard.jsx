import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Transactions from "./Transactions";
import Income from "./Income";
import Expenses from "./Expenses";
import Savings from "./Savings";
import CalendarPage from "./CalendarPage";
import { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const [incomeData] = useState([ {month:"Jan",income:1000,expense:800}, {month:"Feb",income:1200,expense:900} ]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dash-content">
        <h1>Dashboard</h1>
        <div className="boxes">
          <div className="box">Total Income: ₹{incomeData.reduce((a,b)=>a+b.income,0)}</div>
          <div className="box">Total Expense: ₹{incomeData.reduce((a,b)=>a+b.expense,0)}</div>
        </div>
        <LineChart width={500} height={300} data={incomeData}>
          <Line type="monotone" dataKey="income" stroke="green" />
          <Line type="monotone" dataKey="expense" stroke="red" />
          <CartesianGrid stroke="#ccc"/>
          <XAxis dataKey="month"/>
          <YAxis/>
          <Tooltip/>
        </LineChart>
        <Routes>
          <Route path="transactions" element={<Transactions />} />
          <Route path="income" element={<Income />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="savings" element={<Savings />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Routes>
      </div>
    </div>
  );
}
