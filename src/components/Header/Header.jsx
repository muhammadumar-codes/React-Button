import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo-link-container">
        <div className="logo">MyBrand</div>

        <div>
          <nav>
            <Link to="/">Login</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/user">Users</Link>
            <Link to="/count">Count</Link>
          </nav>
        </div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search"></i>
      </div>
    </header>
  );
}
