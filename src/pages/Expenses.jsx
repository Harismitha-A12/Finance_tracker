import React, { useState, useEffect } from "react";
import { addEntry, readEntries } from "../utils/storage";

export default function Expenses() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(readEntries().expenses || []);
  }, []);

  function onlyLetters(s) {
    return s.replace(/[^a-zA-Z\s]/g, "");
  }

  function submit(e) {
    e.preventDefault();
    if (!date || !amount || !source) return alert("Fill all fields");
    addEntry("expenses", { date, amount: Number(amount), source });
    setRows(readEntries().expenses);
    setDate("");
    setAmount("");
    setSource("");
  }

  return (
    <div>
      <h2>Expenses</h2>
      <div className="row">
        <div className="card" style={{ minWidth: 320 }}>
          <form onSubmit={submit}>
            <label className="label">Date</label>
            <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label className="label">Amount</label>
            <input className="input" type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <label className="label">Category / Source</label>
            <input className="input" value={source} onChange={(e) => setSource(onlyLetters(e.target.value))} placeholder="Groceries / Food" />
            <div style={{ marginTop: 12 }}>
              <button className="btn primary" type="submit">Save Expense</button>
            </div>
          </form>
        </div>

        <div className="card" style={{ flex: 1 }}>
          <h3>Recent expenses</h3>
          <table className="table">
            <thead><tr><th>Date</th><th>Category</th><th>Amount</th></tr></thead>
            <tbody>
              {rows.length ? rows.slice().reverse().map(r => (
                <tr key={r.id}><td>{r.date}</td><td>{r.source}</td><td>₹ {Number(r.amount).toFixed(2)}</td></tr>
              )) : <tr><td colSpan="3" className="muted">No expenses yet</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
