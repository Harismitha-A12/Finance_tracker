import {Link} from "react-router-dom";
import "./navbar.jsx";

export default function navbar() {
    return(
        <nav className="navbar">
            <div className="nav-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
                

            </div>
        </nav>
    );
}