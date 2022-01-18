import React from "react";

function Header() {
  return (
    <div className="text-nunito-regular">
      <p>
        An informative DSA Roadmap is presented to you by GDSC-JSSSTU. Join us
        and start your DSA journey!
      </p>
      <div className="alert alert-info">
        <div>
          Make sure to join GDSC JSSSTU Community Server:{" "}
          <a href="https://discord.dscjssstu.in/">
            https://discord.dscjssstu.in/
          </a>
        </div>
        <div className="mt-3">
          Create an account on LeetCode:{" "}
          <a href="https://leetcode.com/">https://leetcode.com/</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
