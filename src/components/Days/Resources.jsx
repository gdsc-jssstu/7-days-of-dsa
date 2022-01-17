import React from "react";

function Resources({ resources }) {
  return (
    <div className="my-3">
      <h5 className="mb-2">Resources</h5>

      <div className="px-2">
        {/* Blogs References */}
        {resources["Blogs"]?.length !== 0 && (
          <div className="my-2">
            <h6>Blogs</h6>
            <ul>
              {resources["Blogs"]?.map((item) => (
                <li key={item.link}>
                  <a href={item.link}>{item.name || item.link}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Youtube References */}
        {resources["YouTube"]?.length !== 0 && (
          <div className="my-2">
            <h6>YouTube</h6>
            <div className="row">
              {resources["YouTube"]?.map((item) => (
                <div className="col-md-5 m-2" key={item.link}>
                  <iframe
                    width="100%"
                    height="150"
                    title={item.name || item.link}
                    src={item.link}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
