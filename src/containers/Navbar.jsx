import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gdsc-logo.png";

function Navbar() {
  return (
    <nav className="navbar shadow bg-dark pt-0 pt-md-2">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="navbar-brand">
          <Link
            to="/"
            className="text-decoration-none text-light text-quicksand-medium d-flex align-items-center"
          >
            <h4 className="mt-2">7 Days of DSA</h4>
          </Link>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <a href="https://dscjssstu.in/">
            <img
              src={logo}
              alt="GDSC Logo"
              className="img-fluid"
              style={{ width: 250, marginRight: 10 }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
