import React, { useState, useEffect } from "react";
import { addEntry, readEntries } from "../utils/storage";

export default function Savings() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(readEntries().savings || []);
  }, []);

  function onlyLetters(s) {
    return s.replace(/[^a-zA-Z\s]/g, "");
  }

  function submit(e) {
    e.preventDefault();
    if (!date || !amount || !purpose) return alert("Fill all fields");
    addEntry("savings", { date, amount: Number(amount), source: purpose });
    setRows(readEntries().savings);
    setDate("");
    setAmount("");
    setPurpose("");
  }

  return (
    <div>
      <h2>Savings</h2>
      <div className="row">
        <div className="card" style={{ minWidth: 320 }}>
          <form onSubmit={submit}>
            <label className="label">Date</label>
            <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label className="label">Amount</label>
            <input className="input" type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <label className="label">Purpose</label>
            <input className="input" value={purpose} onChange={(e) => setPurpose(onlyLetters(e.target.value))} placeholder="Emergency / FD" />
            <div style={{ marginTop: 12 }}>
              <button className="btn primary" type="submit">Save</button>
            </div>
          </form>
        </div>

        <div className="card" style={{ flex: 1 }}>
          <h3>Recent savings</h3>
          <table className="table">
            <thead><tr><th>Date</th><th>Purpose</th><th>Amount</th></tr></thead>
            <tbody>
              {rows.length ? rows.slice().reverse().map(r => (
                <tr key={r.id}><td>{r.date}</td><td>{r.source}</td><td>₹ {Number(r.amount).toFixed(2)}</td></tr>
              )) : <tr><td colSpan="3" className="muted">No savings yet</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
