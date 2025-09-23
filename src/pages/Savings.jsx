export default function Savings() {
  const data=[{name:"Bank FD",deposit:5000,date:"2025-09-05"}];
  return (
    <div>
      <h2>Savings</h2>
      <table>
        <thead><tr><th>Name</th><th>Deposit</th><th>Date</th></tr></thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}><td>{d.name}</td><td>{d.deposit}</td><td>{d.date}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
