import { React } from "react";
import { NavLink, Link } from "react-router-dom";

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      LOGO
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Signin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Menu;
