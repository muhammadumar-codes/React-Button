import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo-link-container">
        <div className="logo">MyBrand</div>

        <div>
          <nav className="nav-list">
            
            <NavLink to="/" className={"btn"}>Login</NavLink>
            <NavLink to="/registration" className={"btn"}>Registration</NavLink>
            <NavLink to="/user" className={"btn"}>Users</NavLink>
            <NavLink to="/count" className={"btn"}>Count</NavLink>
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
