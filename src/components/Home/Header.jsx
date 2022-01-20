import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-nunito-regular mr-2 mr-md-5">
      <p className="d-flex justify-content-start mt-2">
      <iframe width="100%" height="350" src="https://www.youtube.com/embed/V98kIq24IXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>
      <div className="alert alert-info">
        <h5>Before you start, make sure to:</h5>
        <div>
          Join GDSC JSSSTU Community Server:{" "}
          <a href="https://discord.dscjssstu.in/">
            https://discord.dscjssstu.in/
          </a>
        </div>
        <div className="">
          Go through the FAQs&nbsp;
          <Link to="/faq" className="text-decoration-none text-nunito-regular">
            here!
          </Link>
        </div>
        <div className="">
          Create an account on LeetCode:{" "}
          <a href="https://leetcode.com/">https://leetcode.com/</a>

        </div>
      </div>
    </div>
  );
}

export default Header;
