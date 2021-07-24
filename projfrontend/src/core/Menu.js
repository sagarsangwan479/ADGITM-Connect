import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import '../styles.css';
import adgitm from '../logo-adgitm.jpg';

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};



const Menu = ({ history }) => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <a href="#" className="navbar-brand"><img src={adgitm} alt="" width="25rem" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">

    <ul className="navbar-nav pl-5 pr-5 ml-auto">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
          >
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
            >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
            >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
              >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
              >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-danger font-weight-bold"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
      </div>
    </nav>
    
  </div>
);

export default withRouter(Menu);
