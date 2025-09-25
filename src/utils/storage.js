// simple localStorage based storage for incomes/expenses/savings
const KEY = "ft_entries_v1";

export function readEntries() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    const base = { incomes: [], expenses: [], savings: [] };
    localStorage.setItem(KEY, JSON.stringify(base));
    return base;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return { incomes: [], expenses: [], savings: [] };
  }
}

export function writeEntries(obj) {
  localStorage.setItem(KEY, JSON.stringify(obj));
}

export function addEntry(type, entry) {
  const all = readEntries();
  entry.id = Date.now() + Math.floor(Math.random() * 1000);
  all[type].push(entry);
  writeEntries(all);
  return entry;
}

export function clearAll() {
  localStorage.removeItem(KEY);
}
