import { React } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  Home
                </NavLink>
              </li>
              {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                  <NavLink
                    to="/user/dashboard"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }>
                    Dashboard
                  </NavLink>
                </li>
              )}
              {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                  <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }>
                    Dashboard
                  </NavLink>
                </li>
              )}
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
            </ul>
            {isAuthenticated() && (
              <button
                className="btn btn-danger"
                onClick={() =>
                  signout(() => {
                    navigate("/");
                  })
                }>
                Signout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
