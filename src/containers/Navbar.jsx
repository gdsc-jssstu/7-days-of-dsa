import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-dark text-light pt-2 pb-1 text-center">
      <div className="container">
        <Link to="/" className="text-decoration-none text-light">
          <h2>7 Days of DSA</h2>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
