import React from "react";
import social_media_links from "../data/social_media_links";

function Footer() {
  return (
    <div className="bg-dark pt-2 pb-1">
      <div className="d-flex justify-content-center align-items-center">
        {social_media_links.map((link) => (
          <div key={"Link To - " + link.name} className="mx-2">
            <a
              href={link.href}
              className="text-decoration-none"
              title={link.name}
            >
              <i
                className={`${link["fontawesome-icon"]} ${link.color} link-hover`}
              ></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
