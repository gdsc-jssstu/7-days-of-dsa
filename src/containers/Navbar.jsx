import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gdsc-logo.png";

function Navbar() {
  return (
    <nav className="navbar shadow bg-dark pt-0 pt-md-2">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="text-decoration-none text-light text-quicksand-medium"
          >
            <img
              src={logo}
              alt="GDSC Logo"
              className="img-fluid rounded-circle"
              style={{ width: 35, marginRight: 10 }}
            />
            <small>7 Days of DSA</small>
          </Link>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <Link to="/faq" className="text-decoration-none">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
