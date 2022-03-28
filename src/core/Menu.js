import { React } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const Menu = () => {
  const navigate = useNavigate();
  return (
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
          {!isAuthenticated() && (
            <>
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
            </>
          )}

          {isAuthenticated() && (
            <li>
              <button
                className="btn btn-danger"
                onClick={() =>
                  signout(() => {
                    navigate("/");
                  })
                }>
                Signout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
