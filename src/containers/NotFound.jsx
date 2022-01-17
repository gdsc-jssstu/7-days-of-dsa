import React from "react";
import { Link } from "react-router-dom";

function NotFound({ msg }) {
  return (
    <div className="container my-5">
      <div class="col-md-5 mx-2 mx-md-auto card p-2">
        <div class="card-body text-center">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yYBFzWZ0R970KK2bJhwO9AHaEi%26pid%3DApi&f=1"
            alt="404 error"
            class="img-fluid"
          />
          <p>{msg}</p>
          <Link to="/">Return to home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
