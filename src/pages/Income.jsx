export default function Income() {
  const data=[{category:"Salary",name:"Job",amount:1000,date:"2025-09-01"}];
  return (
    <div>
      <h2>Income</h2>
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
