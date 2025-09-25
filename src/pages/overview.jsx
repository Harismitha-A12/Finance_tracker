import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { readEntries } from "../utils/storage";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#FF7A7A", "#7AC6FF", "#A8FF9E", "#FFCE7A", "#BFA2FF"];

function aggregateMonthly(entries, type) {
  // returns array [{month: "Jan", income: 1000, expense: 300}, ...]
  const months = Array.from({ length: 12 }, (_, i) => {
    const m = String(i + 1).padStart(2, "0");
    return { name: m, income: 0, expense: 0 };
  });

  const year = new Date().getFullYear();

  (entries.incomes || []).forEach((it) => {
    if (it.date.startsWith(String(year))) {
      const monthIndex = parseInt(it.date.slice(5, 7), 10) - 1;
      months[monthIndex].income += Number(it.amount || 0);
    }
  });
  (entries.expenses || []).forEach((it) => {
    if (it.date.startsWith(String(year))) {
      const monthIndex = parseInt(it.date.slice(5, 7), 10) - 1;
      months[monthIndex].expense += Number(it.amount || 0);
    }
  });
  // convert name to short month
  const monthsShort = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return months.map((m, i) => ({ name: monthsShort[i], income: m.income, expense: m.expense }));
}

export default function Overview() {
  const [date, setDate] = useState(new Date());
  const [entries, setEntries] = useState(readEntries());
  const [mode, setMode] = useState("daily");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setEntries(readEntries());
  }, []);

  useEffect(() => {
    const dstr = date.toISOString().slice(0, 10);
    const items = [
      ...(entries.incomes || []).filter((i) => i.date === dstr).map((i) => ({ ...i, type: "income" })),
      ...(entries.expenses || []).filter((i) => i.date === dstr).map((i) => ({ ...i, type: "expense" })),
      ...(entries.savings || []).filter((i) => i.date === dstr).map((i) => ({ ...i, type: "saving" })),
    ];
    setSelectedItems(items);
  }, [date, entries]);

  // pieData: depending on mode, for expenses
  const pieData = (() => {
    if (!entries.expenses) return [];
    if (mode === "daily") {
      const map = {};
      const dstr = date.toISOString().slice(0, 10);
      entries.expenses.filter((e) => e.date === dstr).forEach((e) => {
        map[e.source] = (map[e.source] || 0) + Number(e.amount || 0);
      });
      return Object.keys(map).map((k) => ({ name: k, value: map[k] }));
    }
    if (mode === "monthly") {
      const map = {};
      const prefix = date.toISOString().slice(0, 7);
      entries.expenses.filter((e) => e.date.startsWith(prefix)).forEach((e) => {
        map[e.source] = (map[e.source] || 0) + Number(e.amount || 0);
      });
      return Object.keys(map).map((k) => ({ name: k, value: map[k] }));
    }
    // annual
    const map = {};
    const year = date.getFullYear();
    entries.expenses.filter((e) => e.date.startsWith(String(year))).forEach((e) => {
      map[e.source] = (map[e.source] || 0) + Number(e.amount || 0);
    });
    return Object.keys(map).map((k) => ({ name: k, value: map[k] }));
  })();

  const barData = aggregateMonthly(entries);

  return (
    <div>
      <h2>Overview</h2>
      <div className="row" style={{ alignItems: "flex-start" }}>
        <div className="card" style={{ width: 320 }}>
          <h4>Select date</h4>
          <Calendar value={date} onChange={setDate} />
          <div style={{ marginTop: 12 }}>
            <label className="label">Mode</label>
            <select className="input" value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
              <option value="annual">Annual</option>
            </select>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div className="card">
            <h4>Entries on {date.toDateString()}</h4>
            {selectedItems.length ? selectedItems.map((it) => (
              <div key={it.id} style={{ padding: 8, borderBottom: "1px dashed rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight: 600 }}>{it.source} • ₹{Number(it.amount).toFixed(2)}</div>
                <div className="muted" style={{ fontSize: 13 }}>{it.type}</div>
              </div>
            )) : <div className="muted">No records on this date</div>}
          </div>

          <div className="row" style={{ marginTop: 18 }}>
            <div className="card" style={{ width: 360 }}>
              <h4>Expenses breakdown ({mode})</h4>
              {pieData.length ? (
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                      {pieData.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              ) : <div className="muted">No expense data for this period</div>}
            </div>

            <div className="card" style={{ flex: 1 }}>
              <h4>Monthly Income vs Expense (Year {new Date().getFullYear()})</h4>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#6adfa6" />
                    <Bar dataKey="expense" fill="#ff9aa2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
