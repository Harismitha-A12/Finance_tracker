export default function Expenses() {
  const data=[{category:"Food",name:"Groceries",amount:200,date:"2025-09-02"}];
  return (
    <div>
      <h2>Expenses</h2>
      <table>
        <thead><tr><th>Category</th><th>Name</th><th>Amount</th><th>Date</th></tr></thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}><td>{d.category}</td><td>{d.name}</td><td>{d.amount}</td><td>{d.date}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
