import {Link} from "react-router-dom";

export default function sidebar() {
    return(
        <aside className="sidebar">
            <Link to="/dashboard">Home</Link>
            <Link to="transactions">Transactions</Link>
            <Link to="income">Income</Link>
            <Link to="expense">Expenses</Link>
            <Link to="savings">Savings</Link>
            <Link to="calendar">Calendar</Link>
        </aside>
    );
}