// seeds some demo data if storage empty
import { readEntries, writeEntries } from "./storage";

export function seedDemoIfEmpty() {
  const current = readEntries();
  if (
    (current.incomes && current.incomes.length) ||
    (current.expenses && current.expenses.length) ||
    (current.savings && current.savings.length)
  ) {
    return; // already has data
  }

  const today = new Date();
  const y = today.getFullYear();
  // helper to format date
  const fmt = (d) => d.toISOString().slice(0, 10);

  const sample = {
    incomes: [
      { id: 1, date: fmt(new Date(y, today.getMonth(), 1)), amount: 50000, source: "Salary" },
      { id: 2, date: fmt(new Date(y, today.getMonth(), 10)), amount: 8000, source: "Freelance" },
      { id: 3, date: fmt(today), amount: 2000, source: "Gift" },
    ],
    expenses: [
      { id: 4, date: fmt(new Date(y, today.getMonth(), 2)), amount: 1200, source: "Groceries" },
      { id: 5, date: fmt(new Date(y, today.getMonth(), 8)), amount: 2500, source: "Rent" },
      { id: 6, date: fmt(today), amount: 450, source: "Transport" },
    ],
    savings: [
      { id: 7, date: fmt(new Date(y, today.getMonth(), 3)), amount: 5000, source: "Emergency Fund" },
      { id: 8, date: fmt(today), amount: 1000, source: "Short Term" },
    ],
  };

  writeEntries(sample);
}
