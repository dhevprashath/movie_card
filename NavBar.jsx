import { Link } from "react-router-dom";
import "../Css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Movies</div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/favorites" className="nav-link">Favorites</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
